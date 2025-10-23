'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {cn} from '@/lib/utils';
import {type LucideIcon} from 'lucide-react';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-1">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <Link href={item.url} className="cursor-pointer">
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg text-base text-gray-900 transition-all',
                      'hover:bg-sidebar-accent hover:bg-[linear-gradient(90deg,#6B38FE_0%,#6331F1_53%,#6D43E4_69%,#9F63FF_100%)] hover:text-white cursor-pointer transition-all duration-100',
                      isActive
                        ? 'bg-sidebar-accent font-semibold bg-[linear-gradient(90deg,#6B38FE_0%,#6331F1_53%,#6D43E4_69%,#9F63FF_100%)] text-white'
                        : 'text-foreground'
                    )}>
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
