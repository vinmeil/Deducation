"use client";

import { ConnectButton } from "@mysten/dapp-kit";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { mockUsers } from "@/data/mockData";

export default function Home() {
  const user = mockUsers[0];
  const [batteryPercentage, setBatteryPercentage] = useState<string>("0");

  useEffect(() => {
    if (user?.battery) {
      setBatteryPercentage(((user.battery.currentCapacity / user.battery.maxCapacity) * 100).toFixed(2));
    }
  }, []);

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
        {user?.battery && (
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="font-bold">Battery Percentage</p>
              </div>
              <div className="flex flex-row gap-3 w-full items-center">
                <BsFillLightningChargeFill />
                <div
                  className="bg-secondary bg-opacity-20 rounded-lg h-[30px] p-1 relative w-full"
                >
                  <span className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                    {batteryPercentage}%
                  </span>
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-lg"
                    style={{ width: `${batteryPercentage}%` }}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
