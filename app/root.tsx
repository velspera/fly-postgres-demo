import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from '@remix-run/node';
import stylesheet from './tailwind.css?url';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-stone-100 text-sm">
        <div className="flex flex-col h-screen relative">
          <div className="flex-1 px-10 pt-10 w-full space-y-5 container mx-auto">
            <header className="box-border w-full object-center">
              <h1 className="text-xl mb-3 ml-6">Happy Birthday,</h1>
              <h1 className="text-5xl font-loveya sm:-mt-2 -mb-2 leading-4">Elizabeth <span className="font-bold sm:ml-0 ml-4 font-rocksalt text-4xl text-violet-500">Montgomery</span></h1>
              <p className="bg-indigo-100 p-3 text-lg rounded-xl leading-tight">Want to leave a birthday message for Elizabeth Montgomery? Drop it right here!</p>
            </header>
            <main className="w-full flex-1">
              {children}
              <ScrollRestoration />
              <Scripts />
            </main>
          </div>
          <footer className="w-full relative bottom-0 inset-x-0 text-center text-xs py-5 mt-5">
            <p>© 2024 Yvette Johns</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous'},
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&family=Teachers:ital,wght@0,400..800;1,400..800&family=Rock+Salt&display=swap'}
  ];
}