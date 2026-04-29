import Image from 'next/image';
import { Button } from '../ui/button';

interface PlaceOrderProps {
	onSubmit: () => void;
	isBuying: boolean;
	isDrawer: boolean;
}

const PlaceOrder = ({ onSubmit, isBuying, isDrawer }: PlaceOrderProps) => {
	return (
		<>
			<Image
				src="https://xmilcbzxgstsgasraceh.supabase.co/storage/v1/object/public/product_images/1777396354215.jpg"
				alt="AutoCAD Assignment"
				width={400}
				height={160}
				className={`w-full h-40 object-cover rounded-md ${isDrawer ? 'my-2' : ''}`}
			/>

			<p className="text-gray-600 my-2">You'll receive the PDF on your college email</p>

			<div className="space-y-6">
				<Button type="submit" className="w-full" onClick={onSubmit} disabled={isBuying}>
					{isBuying ? 'Placing order...' : 'Place Order'}
				</Button>
			</div>
		</>
	);
};

export default PlaceOrder;
