import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import IndexMain from '~/components/index-main';
import IndexMobile from '~/components/index-mobile';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 w-full border-b backdrop-blur transition-all">
      <div className="flex flex-row-reverse items-center md:flex-row">
        {/* container flex h-14 items-center flex-row-reverse md:flex-row */}
        <IndexMain />
        <IndexMobile />
      </div>
    </div>
  )
}
