"use client";

import { ConnectButton } from "@mysten/dapp-kit";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { mockUsers } from "@/data/mockData";
import { validatorOptions } from "@/constants";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const user = mockUsers[1];
  const [batteryPercentage, setBatteryPercentage] = useState<string>("0");
  const [validatorPercentage, setValidatorPercentage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!user) return;
    
    if (user?.battery) {
      setBatteryPercentage(((user.battery.currentCapacity / user.battery.maxCapacity) * 100).toFixed(2));
    }

    setValidatorPercentage(user?.validatorPercentage);

  }, []);


  const handleRunValidatorClick = (isOpen: any, setIsOpen: any) => {
    console.log("Running Validator");
  }

  return (
    <div className="flex flex-col m-3 h-full">
      {/* Name & Wallet */}
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col truncate">
          <p className="font-bold truncate">0x972qebnfyoasiyf982qewio</p>
          <p className="text-sm font-semibold">104.8 KLT</p>
        </div>
        <ConnectButton />
      </div>

      {/* Battery Percentage */}
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
                  className="bg-secondary bg-opacity-20 rounded-lg h-[30px] p-1 relative w-full border border-secondary border-opacity-20 border-3"
                >
                  <span className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                    {batteryPercentage}%
                  </span>
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-md"
                    style={{ width: `${batteryPercentage}%` }}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Validator & Personal Use */}

      <div className="flex flex-row justify-between items-center gap-5 mx-4 h-1/2 mt-[50px]">
        <div className="flex flex-col justify-center w-1/2 items-center">
          <p className="flex justify-center font-bold w-full text-2xl">Validator</p>
          <p className="flex items-center justify-center mix-blend-difference font-bold text-lg">
              {validatorPercentage}%
            </p>
        </div>
        <div className="flex flex-col justify-center w-1/2 items-center">
          <p className="flex justify-center font-bold w-full text-2xl">Personal Use</p>
          <p className="flex items-center justify-center mix-blend-difference font-bold text-lg">
              {100 - validatorPercentage}%
            </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 mx-4 h-1/2 mt-10 relative">
        <div className="bg-secondary bg-opacity-30 rounded-lg h-[300px] w-1/2 border-secondary border-opacity-20 border-3 p-3 flex flex-col justify-end">
          <div className="w-full flex justify-center">
            <div className="absolute top-[-20px] bg-secondary bg-opacity-30 h-[20px] w-[50px] rounded-t-lg"></div>
          </div>
          <div
            className="bg-gradient-to-tr from-primary to-accent w-full rounded-md bottom-0"
            style={{ height: `${validatorPercentage}%` }}
          ></div>
        </div>
        <div className="bg-secondary bg-opacity-30 rounded-lg h-[300px] w-1/2 border-secondary border-opacity-20 border-3 p-3 flex flex-col justify-end">
          <div className="w-full flex justify-center">
            <div className="absolute top-[-20px] bg-secondary bg-opacity-30 h-[20px] w-[50px] rounded-t-lg"></div>
          </div>
          <div
            className="bg-gradient-to-tr from-primary to-accent w-full rounded-md bottom-0"
            style={{ height: `${(100 - validatorPercentage)}%` }}
          ></div>
        </div>
      </div>

      {/* Validator Buttons */}
      <div className="flex flex-row gap-2 mx-6 items-center justify-between pt-8">
        {validatorOptions.map((option, index) => {
          const activeButtonClass = "rounded-lg bg-primary text-background px-3 py-1 w-[65px]";
          const inactiveButtonClass = "rounded-lg bg-secondary bg-opacity-20 text-secondary px-3 py-1 w-[65px]";
          const isButtonActive = user.isLoaning && index < 3;

          return (
            <button
              key={index}
              className={isButtonActive ? inactiveButtonClass : activeButtonClass}
              disabled={isButtonActive}
              onClick={() => setValidatorPercentage(option.value)}
            >
              {option.value.toString()}%
            </button>
          )
        })}
      </div>

      {/* Run Button */}
      <div className="flex w-full justify-center items-center mt-10">
        <button
          className="flex flex-row items-center justify-center gap-2 px-4 py-2 bg-gradient-to-tl from-primary to-accent text-background rounded-lg glow-button font-semibold"
          onClick={() => handleRunValidatorClick(isModalOpen, setIsModalOpen)}
        >
          <FaPlay />
          Run Validator
        </button>
      </div>

      <style jsx>{`
        .glow-button {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
