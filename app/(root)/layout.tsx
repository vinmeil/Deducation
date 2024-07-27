"use client";

import "../globals.css";
import React, { createContext } from "react";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { networkConfig } from "@/sui/networkConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const MyContext = createContext(null);

  return (
    <MyContext.Provider value={null}>
      <Theme appearance="dark">
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
            <WalletProvider autoConnect>
              <div className={``}>{children}</div>
            </WalletProvider>
          </SuiClientProvider>
        </QueryClientProvider>
      </Theme>
    </MyContext.Provider>
  );
}
