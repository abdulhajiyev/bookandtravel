import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import globalcss from './styles/global.css';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
// import '@fontsource/questrial';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalcss },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body id='body'>
        <SiteHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <SiteFooter />
      </body>
    </html>
  );
}
