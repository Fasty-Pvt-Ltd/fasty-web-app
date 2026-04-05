import { Product } from '@/types/product.types';
import { Card, CardContent } from '@/components/ui/card';
import AddToCart from './AddToCart';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { imageUrl, name, price, stock } = product;

	return (
		<Card className="overflow-hidden">
			<CardContent className="p-3">
				<img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-md" />

				<h2 className="mt-2 text-sm font-medium">{name}</h2>

				<div className="mt-2 flex items-center justify-between">
					<p className="text-sm text-muted-foreground">₹ {price}</p>

					<AddToCart product={product} stock={stock} />
				</div>
			</CardContent>
		</Card>
	);
}
