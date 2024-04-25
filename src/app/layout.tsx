"use client";

import "../styles/global.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: 'LockBox app',
// 	description: 'Generate and save secure passwords',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routeArray = ["/register", "/login"];
  const pathname = usePathname(); // Assumed to return the current route/path

  // Check if pathname is in the routeArray
  const rendernav = !routeArray.includes(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/images/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {rendernav && (
            <>
              <Navbar /> <div className="navbar-placeholder" />
            </>
          )}
          {children}
        </main>
      </body>
    </html>
  );
}
