'use client';

import * as React from 'react';
import {NavMain} from '@/components/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/Frame_1.gif';
import {sidebarItems} from '@/constants';
import {IconLogout} from '@tabler/icons-react';

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 h-20">
              <Link href="#">
                <Image src={logo} height={50} width={76} alt="logo" />
                <span className="flex flex-col ml-1">
                  <span className="text-base font-semibold ">Metro Solver</span>
                  <span className="text-[12px] font-normal text-start">
                    Your it partner
                  </span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarItems.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <button>
          <span className="cursor-pointer flex items-center gap-3 px-3 py-2 rounded-lg text-base text-gray-900 dark:text-white hover:bg-sidebar-accent">
            <IconLogout className="w-5 h-5" />
            Log out
          </span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
