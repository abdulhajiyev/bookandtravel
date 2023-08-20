import { Link } from '@remix-run/react';

import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
// import { CommandMenu } from '@/components/command-menu';
import { Icons } from '~/components/icons';
import { MainNav } from '~/components/main-nav';
import { MobileNav } from '~/components/mobile-nav';
import { buttonVariants } from '~/components/ui/button';
export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all">
      <div className="container flex h-14 items-center flex-row-reverse md:flex-row">
        <MainNav />
        <MobileNav />
        {/* <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          </div> */}
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
      </div>
    </header>
  );
}
