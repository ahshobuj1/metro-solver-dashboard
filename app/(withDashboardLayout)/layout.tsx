import {AppSidebar} from '@/components/app-sidebar';
import {SiteHeader} from '@/components/site-header';
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }>
        <AppSidebar variant="inset" />
        <SidebarInset>
          {/* Header */}
          <SiteHeader />

          {/* Content Here  */}
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
};

export default DashboardLayout;
