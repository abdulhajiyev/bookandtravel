import { Link, NavLink } from '@remix-run/react';
// import { usePathname } from 'next/navigation';

import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { Icons } from '~/components/icons';
import Logo from '../assets/images/logo.svg';
export function MainNav() {
  // const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex md:justify-between md:w-full">
      <Link to="/" className="mr-6 flex items-center space-x-2 ">
        <div className="bg-white p-5 overflow-x-auto overflow-y-auto mt-14">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <NavLink
          to="/hello"
          className={cn(
            'transition-colors hover:text-foreground/80 header-link',
            // pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Documentation
        </NavLink>
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
