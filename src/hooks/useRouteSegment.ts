import { usePathname } from 'next/navigation';

export const useRouteSegment = (index: number): string => {
	const pathname = usePathname();
	const segment = pathname.split('/')[index] || '';

	return segment;
};
