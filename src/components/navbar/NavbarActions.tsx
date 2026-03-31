'use client';

import CartButton from '@/components/navbar/CartButton';
import AuthButtons from '@/components/navbar/AuthButtons';

import SheetSide from '../cart/CartSheet';

export default function NavbarActions() {
	return (
		<div className="flex items-center gap-4">
			<SheetSide>
				<CartButton />
			</SheetSide>

			<AuthButtons />
		</div>
	);
}
