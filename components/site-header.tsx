import {Separator} from '@/components/ui/separator';
import {SidebarTrigger} from '@/components/ui/sidebar';
// import {ThemeSelector} from './theme-selector';
import {ModeSwitcher} from './mode-switcher';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import {BellDot, SearchIcon} from 'lucide-react';
import {NavUser} from './nav-user';
import {sidebarItems} from '@/constants';

// user: {
//     name: 'shadcn',
//     email: 'm@example.com',
//     avatar: '/avatars/shadcn.jpg',
//   },

export function SiteHeader() {
  return (
    <header className="flex  h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <InputGroup className="max-w-[470px]">
          <InputGroupInput placeholder="Search something here..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <div className="ml-auto flex items-center gap-2">
          {/* <ThemeSelector /> */}
          <ModeSwitcher />
          <span className="p-2 border-1 border-gray-300 rounded-full cursor-pointer flex justify-center items-center">
            <BellDot className="w-4 h-4 " />
          </span>
          <NavUser user={sidebarItems.user} />
        </div>
      </div>
    </header>
  );
}
