"use client";

import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Counter } from "../../sui/Counter";
import { CreateCounter } from "../../sui/CreateCounter";
import { mockUsers } from "@/data/mockData";

export default function Home() {
  const user = mockUsers[0];

  const currentAccount = useCurrentAccount();
  // const [counterId, setCounter] = useState(() => {
  //   const hash = window.location.hash.slice(1);
  //   return isValidSuiObjectId(hash) ? hash : null;
  // });

  console.log(currentAccount)

  return (
    <div className="flex flex-col m-3">
      {/* Name & Wallet */}
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col truncate">
          <p className="font-bold truncate">0x972qebnfyoasiyf982qewio</p>
          <p className="text-sm">104.8 Kilat</p>
        </div>
        <ConnectButton />
      </div>

      {/* Batteries */}
      <div className="mt-[40px]">
        {user?.batteries.length > 0 && (
          <div className="flex flex-col gap-6 w-full">
            {user?.batteries.map((battery) => {
              const capacityPercentage = ((battery.currentCapacity / battery.maxCapacity) * 100).toFixed(2);

              return (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <p className="font-bold">{battery.name}</p>
                    <p className="text-sm">{`${capacityPercentage}%`}</p>
                  </div>
                  <div
                    key={battery._id}
                    className="bg-secondary bg-opacity-20 rounded-lg h-[30px] p-1 relative"
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      {capacityPercentage}%
                    </span>
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-lg"
                      style={{ width: `${capacityPercentage}%` }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-background">
                        {capacityPercentage}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
