"use client";

import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Counter } from "../../sui/Counter";
import { CreateCounter } from "../../sui/CreateCounter";

export default function Home() {
  const currentAccount = useCurrentAccount();
  const [counterId, setCounter] = useState(() => {
    const hash = window.location.hash.slice(1);
    return isValidSuiObjectId(hash) ? hash : null;
  });

  console.log(currentAccount)

  return (
    <div className="flex flex-col mt-3">
      {/* Name & Wallet */}
      <div className="flex flex-row justify-between items-center mx-5 gap-2">
        <p className="font-bold text-lg truncate">Name Goes Here !!</p>
        <ConnectButton />
      </div>
    </div>
  );
}
