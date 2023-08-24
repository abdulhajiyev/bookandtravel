import { MainNav } from '~/components/main-nav';
import { MobileNav } from '~/components/mobile-nav';
export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all">
      <div className="container flex h-14 items-center flex-row-reverse md:flex-row">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
