import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import "@mysten/dapp-kit/dist/index.css";
import NavBar from "./components/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export const metadata: Metadata = {
  title: "Kilat",
  description: "Generate Electricity, Earn Money",
  icons: {
    icon: "/images/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col h-full max-w-[400px]">
      <body className={`${poppins.className} max-w-[400px]`}>
        <div className="blurry-circle bottom-left"></div>
        <div className="pb-32 max-w-[400px]">
          {children}
        </div>
        <NavBar />
      </body>
    </html>
  );
}
