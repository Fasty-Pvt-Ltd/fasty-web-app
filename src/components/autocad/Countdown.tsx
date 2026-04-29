'use client';

import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';

interface CountdownProps {
	hasBought: boolean;
}

const Countdown = ({ hasBought }: CountdownProps) => {
	const [timeLeft, setTimeLeft] = useState<string>('');

	useEffect(() => {
		const calculateCountdown = () => {
			const deadline = new Date('2026-04-30T12:00:00').getTime(); // 30 April 2026, 12 PM
			const now = new Date().getTime();
			const difference = deadline - now;

			if (difference <= 0) {
				setTimeLeft('Offer Ended');
				return;
			}

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((difference / 1000 / 60) % 60);
			const seconds = Math.floor((difference / 1000) % 60);

			if (days > 0) {
				setTimeLeft(`${days}d ${hours}h ${minutes}m`);
			} else if (hours > 0) {
				setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
			} else if (minutes > 0) {
				setTimeLeft(`${minutes}m ${seconds}s`);
			} else {
				setTimeLeft(`${seconds}s`);
			}
		};

		calculateCountdown();
		const interval = setInterval(calculateCountdown, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Badge variant="destructive" className="absolute top-[-10] right-[-10]">
			Limited Time Offer {hasBought ? '' : `| Ends in ${timeLeft}`}
		</Badge>
	);
};

export default Countdown;
