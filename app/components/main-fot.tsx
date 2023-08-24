'use client';

import { Link } from '@remix-run/react';
// import { usePathname } from 'next/navigation';

import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { Icons } from '~/components/icons';

export function MainFot() {
  // const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex md:justify-between md:w-full">
      <Link to="/" className="mr-6 flex items-center space-x-2 ">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          to="/hello"
          className={cn(
            'transition-colors hover:text-foreground/80',
            // pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Documentation
        </Link>
        <Link
          to="/docs/components"
          className={cn(
            'transition-colors hover:text-foreground/80',
            // pathname?.startsWith('/docs/components')
            //   ? 'text-foreground'
            //   : 'text-foreground/60',
          )}
        >
          Components
        </Link>
        <Link
          to="/themes"
          className={cn(
            'transition-colors hover:text-foreground/80',
            // pathname?.startsWith('/themes')
            //   ? 'text-foreground'
            //   : 'text-foreground/60',
          )}
        >
          Themes
        </Link>
        <Link
          to="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            // pathname?.startsWith('/examples')
            //   ? 'text-foreground'
            //   : 'text-foreground/60',
          )}
        >
          Examples
        </Link>
      </nav>
    </div>
  );
}
