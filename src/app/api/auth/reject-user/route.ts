import { auth, clerkClient } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { ALLOWED_EMAIL_DOMAIN } from '@/lib/constants';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
	const { userId } = await auth();
	if (!userId) return NextResponse.json({ allowed: false }, { status: 401 });

	const { email } = await req.json();
	if (!email) return NextResponse.json({ allowed: false }, { status: 400 });

	const domain = email.split('@')[1] ?? '';

	// Wrong domain — delete from Clerk and Supabase
	if (domain !== ALLOWED_EMAIL_DOMAIN) {
		const clerk = await clerkClient();
		await clerk.users.deleteUser(userId);
		await supabase.from('profiles').delete().eq('clerk_id', userId);
		return NextResponse.json({ allowed: false });
	}

	// Right domain — check allowed_users table
	const { data } = await supabase
		.from('allowed_users')
		.select('email')
		.eq('email', email.toLowerCase().trim())
		.maybeSingle();

	if (!data) {
		// Right domain but not in allowed_users — just sign out, don't delete
		return NextResponse.json({ allowed: false });
	}

	return NextResponse.json({ allowed: true });
}
