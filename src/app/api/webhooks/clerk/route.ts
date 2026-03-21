import { Webhook } from 'svix';
import { headers } from 'next/headers';
import type { WebhookEvent } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
	const secret = process.env.CLERK_WEBHOOK_SECRET;
	if (!secret) return new Response('Missing webhook secret', { status: 500 });

	const payload = await req.text();
	const headersList = await headers();

	const svixId = headersList.get('svix-id');
	const svixTimestamp = headersList.get('svix-timestamp');
	const svixSignature = headersList.get('svix-signature');

	if (!svixId || !svixTimestamp || !svixSignature)
		return new Response('Missing svix headers', { status: 400 });

	let event: WebhookEvent;
	try {
		const wh = new Webhook(secret);
		event = wh.verify(payload, {
			'svix-id': svixId,
			'svix-timestamp': svixTimestamp,
			'svix-signature': svixSignature,
		}) as WebhookEvent;
	} catch {
		return new Response('Webhook verification failed', { status: 400 });
	}

	if (event.type === 'user.created') {
		const { id, email_addresses, primary_email_address_id, first_name, last_name, image_url } =
			event.data;

		const email =
			email_addresses.find((e) => e.id === primary_email_address_id)?.email_address ??
			email_addresses[0]?.email_address;

		if (!email) return new Response('No email found', { status: 422 });

		// Step 1: Insert into profiles and get back the UUID
		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.insert({
				clerk_id: id,
				email,
				first_name: first_name ?? null,
				last_name: last_name ?? null,
				image_url: image_url ?? null,
			})
			.select('id')
			.single();

		if (profileError || !profile) {
			return new Response('Database error', { status: 500 });
		}

		// Step 2: Insert into cart using profiles.id UUID
		const { error: cartError } = await supabase.from('cart').insert({ user_id: profile.id });

		if (cartError) {
			// Not returning 500 — Clerk would retry and profile insert would fail
			// Handle orphaned carts separately if needed
		}
	}

	return new Response('OK', { status: 200 });
}
