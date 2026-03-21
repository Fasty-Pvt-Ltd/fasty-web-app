'use client';

import { useUser, useClerk } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { ALLOWED_EMAIL_DOMAIN } from '@/lib/constants';

type GuardStatus = 'loading' | 'allowed' | 'wrong-domain' | 'not-in-allowed-users';

export default function EmailDomainGuard({ children }: { children: React.ReactNode }) {
	const { user, isLoaded, isSignedIn } = useUser();
	const { signOut } = useClerk();
	const [status, setStatus] = useState<GuardStatus>('loading');

	useEffect(() => {
		if (!isLoaded) return;

		if (!isSignedIn || !user) {
			setStatus('allowed');
			return;
		}

		const primaryEmail =
			user.primaryEmailAddress?.emailAddress ?? user.emailAddresses[0]?.emailAddress ?? '';

		const domain = primaryEmail.split('@')[1] ?? '';

		// Wrong domain entirely
		if (domain !== ALLOWED_EMAIL_DOMAIN) {
			setStatus('wrong-domain');
			signOut();
			return;
		}

		// Correct domain — check allowed_users table
		(async () => {
			setStatus('loading');
			try {
				const res = await fetch('/api/auth/reject-user', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email: primaryEmail }),
				});
				const { allowed } = await res.json();
				if (allowed) {
					setStatus('allowed');
				} else {
					setStatus('not-in-allowed-users');
					await signOut();
				}
			} catch {
				setStatus('allowed'); // fail open on network error
			}
		})();
	}, [isLoaded, isSignedIn, user, signOut]);

	if (!isLoaded || (status === 'loading' && isSignedIn)) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<p className="text-sm text-gray-500 animate-pulse">Verifying your access…</p>
			</div>
		);
	}

	if (status === 'wrong-domain') {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="max-w-md p-8 text-center space-y-4">
					<h1 className="text-2xl font-semibold text-red-600">Access Denied</h1>
					<p className="text-gray-500">
						Only <strong>@{ALLOWED_EMAIL_DOMAIN}</strong> email addresses are allowed.
					</p>
				</div>
			</div>
		);
	}

	if (status === 'not-in-allowed-users') {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="max-w-md p-8 text-center space-y-4">
					<h1 className="text-2xl font-semibold">Coming Soon to Your Hostel 🏠</h1>
					<p className="text-gray-500">
						Your email is verified but this service is not available for your hostel
						yet. We're expanding — check back soon!
					</p>
				</div>
			</div>
		);
	}

	return <>{children}</>;
}
