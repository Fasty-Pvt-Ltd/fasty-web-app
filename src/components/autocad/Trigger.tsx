import { Button } from '../ui/button';
import { SignInButton } from '@clerk/nextjs';
import { DrawerTrigger } from '../ui/drawer';
import { DialogTrigger } from '../ui/dialog';

interface TriggerProps {
	isDrawer: boolean;
	isSignedIn: boolean;
	hasBought: boolean;
	isLoadingHasBought: boolean;
}

const Trigger = ({ isDrawer, isSignedIn, hasBought, isLoadingHasBought }: TriggerProps) => {
	if (isDrawer)
		return (
			<DrawerTrigger asChild>
				{isSignedIn ? (
					<Button
						className="bg-green-600 hover:bg-green-700 text-white"
						disabled={hasBought || isLoadingHasBought}
					>
						{isLoadingHasBought ? 'Loading...' : hasBought ? 'BOUGHT' : 'BUY'}
					</Button>
				) : (
					<SignInButton mode="modal">
						<Button className="bg-green-600 hover:bg-green-700 text-white">BUY</Button>
					</SignInButton>
				)}
			</DrawerTrigger>
		);

	return (
		<DialogTrigger asChild>
			{isSignedIn ? (
				<Button
					className="bg-green-600 hover:bg-green-700 text-white"
					disabled={hasBought || isLoadingHasBought}
				>
					{isLoadingHasBought ? 'Loading...' : hasBought ? 'BOUGHT' : 'BUY'}
				</Button>
			) : (
				<SignInButton mode="modal">
					<Button className="bg-green-600 hover:bg-green-700 text-white">BUY</Button>
				</SignInButton>
			)}
		</DialogTrigger>
	);
};

export default Trigger;
