"use client";

import { ConnectButton, useCurrentAccount, useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { mockUsers } from "@/data/mockData";
import { validatorOptions } from "@/constants";
import { PACKAGE_ID, KILAT_COIN_TYPE, KILAT_COIN_DECIMAL, KILAT_COIN_OBJECT_ID, KILAT_WALLET_ADDRESS } from "../constants/util.ts";
import { FaPlay, FaStop } from "react-icons/fa";
import Modal from "../components/Modal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import dotenv from "dotenv";

dotenv.config();

export default function Home() {
  const user = mockUsers[1];
  const suiClient = useSuiClient();
  const account = useCurrentAccount();
  const [batteryPercentage, setBatteryPercentage] = useState<number>(0);
  const [validatorPercentage, setValidatorPercentage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isValidatorRunning, setIsValidatorRunning] = useState<boolean>(false);
  const [kilatBalance, setKilatBalance] = useState<number>();
  const [kilatCoinIcon, setKilatCoinIcon] = useState<string | null | undefined>("");

  async function stopValidator() {
    if (!account) return;

    try {
      const tx = new Transaction();

      const { data } = await suiClient.getCoins({
        owner: KILAT_WALLET_ADDRESS,
        coinType: KILAT_COIN_TYPE,
      });

      if (!data.length) {
        throw Error("Kilat coin not found");
      }

      const kilatCoin = data.find(c => c.coinType === KILAT_COIN_TYPE);

      if (!kilatCoin) {
        throw Error("Kilat coin not found");
      }

      const stakeReturns = Math.floor((1000 + Math.random() * 500) * validatorPercentage / 100);

      tx.moveCall({
        target: `${PACKAGE_ID}::kilat_coin::transfer`,
        arguments: [
          tx.object(KILAT_COIN_OBJECT_ID),
          tx.pure.u64(stakeReturns),
          tx.pure.address(account.address)
        ],
      });

      const { digest } = await suiClient.signAndExecuteTransaction({
        signer: Ed25519Keypair.fromSecretKey(decodeSuiPrivateKey(process.env.NEXT_PUBLIC_KILAT_WALLET_SECRET_KEY ?? "").secretKey),
        transaction: tx,
      })

      setKilatBalance(prev => Number(prev) + stakeReturns);

      console.log("Transfer successful: ", digest);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!user) return;

    if (user.battery) {
      setBatteryPercentage(Number(((user.battery.currentCapacity / user.battery.maxCapacity) * 100).toFixed(2)));
    }

    setValidatorPercentage(user?.validatorPercentage);

  }, []);

  // TODO: Remove later, for demo purposes only
  useEffect(() => {
    const interval = setInterval(() => {
      if (user?.battery && !isValidatorRunning) {
        setBatteryPercentage(prev => Math.min(prev + 0.01, 100));
      } else if (user?.battery && isValidatorRunning) {
        setBatteryPercentage(prev => Math.max(prev - 0.01, 0));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isValidatorRunning]);

  useEffect(() => {
    async function fetchKilatBalance() {
      if (account) {
        try {
          const balance = await suiClient.getBalance({
            owner: account.address,
            coinType: KILAT_COIN_TYPE,
          });

          if (!balance) {
            throw Error("Kilat coin not found");
          }

          setKilatBalance(Number(balance.totalBalance));
        } catch (err) {
          console.error(err);
        }
      }
    }

    async function fetchKilatCoinIcon() {
      if (account) {
        try {
          const data = await suiClient.getCoinMetadata({
            coinType: KILAT_COIN_TYPE,
          })

          if (!data) {
            throw Error("Kilat coin not found")
          }

          setKilatCoinIcon(data.iconUrl);
        } catch (err) {
          console.error(err)
        }
      }
    }

    fetchKilatBalance();
    fetchKilatCoinIcon();
  }, [suiClient, account])

  return (
    <div className="flex flex-col m-3 h-full">
      {/* Name & Wallet */}
      <div className="flex flex-row justify-end items-center gap-2">
        {account && <div className="flex flex-col truncate mr-auto">
          <p className="font-bold truncate max-w-[200px]">{account.address}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{Number(kilatBalance) / 10 ** KILAT_COIN_DECIMAL} KLT</p>
            {kilatCoinIcon && <img src={kilatCoinIcon} alt="Kilat Coin" className="size-4" />}
          </div>
        </div>}
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
                    {batteryPercentage.toFixed(2)}%
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
          <p className="flex justify-center font-bold w-full text-xl">Validator</p>
          <p className="flex items-center justify-center mix-blend-difference font-bold text-lg">
            {validatorPercentage}%
          </p>
        </div>
        <div className="flex flex-col justify-center w-1/2 items-center">
          <p className="flex justify-center font-bold w-full text-xl">Personal Use</p>
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
      <p className="mx-6 mt-8 font-semibold md:flex md:justify-center">Validator Share</p>
      <div className="flex flex-row  mx-6 items-center justify-center gap-10 max-sm:gap-2 max-sm:justify-between mt-3">
        {validatorOptions.map((option, index) => {
          const activeButtonClass = "rounded-lg bg-primary text-background px-3 py-1 w-[65px]";
          const inactiveButtonClass = "rounded-lg bg-secondary bg-opacity-20 text-secondary px-3 py-1 w-[65px]";
          const isButtonActive = (user.isLoaning && index < 3) || isValidatorRunning;

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
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          {isValidatorRunning ? <FaStop /> : <FaPlay />}
          {isValidatorRunning ? `Stop Validator` : `Run Validator`}
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isValidatorRunning={isValidatorRunning}
        setIsValidatorRunning={setIsValidatorRunning}
        stopValidator={stopValidator}
      />

      <style jsx>{`
        .glow-button {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
