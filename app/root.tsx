import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { DarkThemeToggle, Flowbite, ThemeModeScript } from "flowbite-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ThemeModeScript />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Flowbite>
      <main className="font-sans bg-gray-100 dark:bg-slate-900 h-screen">
        <div className="flex align-center justify-center mb-3 p-7">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Game Library
            </h1>
          </div>
          <div className="flex items-center ml-auto px-2 gap-1">
            <p className="text-lg font-semibold tracking-normal text-gray-900 dark:text-white">
              <span className="hidden lg:inline">Dark Mode</span>
            </p>
            <DarkThemeToggle />
          </div>
        </div>
        <Outlet />
      </main>
    </Flowbite>
  );
}
