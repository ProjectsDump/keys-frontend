"use client";

import Navbar from "@/components/Navbar";
import "../styles/global.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LockBox app",
  description: "Generate and save secure passwords",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const rendernav = pathname === "/register" ? false : true;
  console.log(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./default.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {rendernav && <Navbar />}
          {children}
        </main>
      </body>
    </html>
  );
}
