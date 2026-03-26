import Link from 'next/link';
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import { useRouteSegment } from '@/hooks/useRouteSegment';

interface MainSidebarGroupProps {
	items: {
		title: string;
		url: string;
	}[];
}

const MainSidebarGroup = ({ items }: MainSidebarGroupProps) => {
	const segment = useRouteSegment(2);
	const { setOpenMobile } = useSidebar();

	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<Link href={item.url} onClick={() => setOpenMobile(false)}>
								<SidebarMenuButton
									tooltip={item.title}
									isActive={item.url.split('/')[2] === segment}
								>
									<span>{item.title}</span>
								</SidebarMenuButton>
							</Link>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

export default MainSidebarGroup;
