'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import CartItemsGrid from './CartItemsGrid';
import CartSummary from './CartSummary';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

interface SheetSideProps {
	children: React.ReactNode;
}

export default function SheetSide({ children }: SheetSideProps) {
	return (
		<div className="flex flex-wrap gap-2">
			<Sheet>
				<SheetTrigger>{children}</SheetTrigger>
				<SheetContent
					side="right"
					className="p-0 data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
				>
					<SheetHeader>
						<SheetTitle>My Cart</SheetTitle>
						<SheetDescription>Your cart items</SheetDescription>
					</SheetHeader>

					<CartItemsGrid />

					<SheetFooter>
						<CartSummary />
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}
