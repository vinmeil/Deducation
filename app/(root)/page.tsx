"use client";

import { ConnectButton, useCurrentAccount, useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { mockUsers } from "@/data/mockData";
import { PACKAGE_ID, KILAT_COIN_TYPE, KILAT_COIN_OBJECT_ID, KILAT_WALLET_ADDRESS } from "../constants/util.ts";
import Modal from "../components/Modal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import dotenv from "dotenv";
import UserModal from "../components/UserModal.tsx";
import TransactionModal from "../components/TransactionModal.tsx";
import ValidatorCard from "../components/ValidatorCard.tsx";
import Header from "../components/Header.tsx";
import BatteryPercentage from "../components/BatteryPercentage.tsx";
import VerticalBattery from "../components/VerticalBattery.tsx";

dotenv.config();

export default function Home() {
  const user = mockUsers[1];
  const suiClient = useSuiClient();
  const account = useCurrentAccount();
  const [isUserConnected, setIsUserConnected] = useState<boolean>(account !== null);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState<boolean>(false);
  const [batteryPercentage, setBatteryPercentage] = useState<number>(0);
  const [validatorPercentage, setValidatorPercentage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isValidatorRunning, setIsValidatorRunning] = useState<boolean>(false);
  const [kilatBalance, setKilatBalance] = useState<number>(0);
  const [stakeReturns, setStakeReturns] = useState<number | undefined>(0);

  useEffect(() => {
    setIsUserConnected(account !== null);
  }, [account])


  async function stopValidator() {
    if (!account) return;

    try {
      const tx = new Transaction();

      const { data } = await suiClient.getCoins({
        owner: KILAT_WALLET_ADDRESS,
        coinType: KILAT_COIN_TYPE,
      });

      if (!data.length) {
        throw Error("No Kilat coins found");
      }

      const kilatCoin = data.find(c => c.coinType === KILAT_COIN_TYPE);

      if (!kilatCoin) {
        throw Error("No Kilat coins found");
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

      return stakeReturns;

    } catch (err) {
      console.log(err);
    }
  }

  const handleValidatorStop = async () => {
    const res = await stopValidator();
    setStakeReturns(res);
    setIsTransactionModalOpen(true);
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

          setKilatBalance(Number(balance.totalBalance));
        } catch (err) {
          console.log(err);
        }
      }
    }

    fetchKilatBalance();
  }, [suiClient, account])

  return (
    <div>
      <div className="flex flex-col m-3 h-full">
        <div>
          {/* Name & Wallet */}
          <Header account={account} isUserConnected={isUserConnected} kilatBalance={kilatBalance} />

          {/* Battery Percentage */}
          <BatteryPercentage user={user} batteryPercentage={batteryPercentage} />
        </div>

        <div className="flex flex-col xs:flex-row">
          {/* Validator & Personal Use */}
          <VerticalBattery validatorPercentage={validatorPercentage} />

          {/* Validator Buttons */}
          <ValidatorCard
            user={user}
            isValidatorRunning={isValidatorRunning}
            setValidatorPercentage={setValidatorPercentage}
            isUserConnected={isUserConnected}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            setIsUserModalOpen={setIsUserModalOpen}
            isUserModalOpen={isUserModalOpen}
            />
        </div>

        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          isValidatorRunning={isValidatorRunning}
          setIsValidatorRunning={setIsValidatorRunning}
          stopValidator={stopValidator}
          // setIsTransactionModalOpen={setIsTransactionModalOpen}
          // isTransactionModalOpen={isTransactionModalOpen}
          handleValidatorStop={handleValidatorStop}
          />

        <UserModal isOpen = {isUserModalOpen} setIsOpen = {setIsUserModalOpen} />

        <TransactionModal isOpen = {isTransactionModalOpen} setIsOpen = {setIsTransactionModalOpen} stakeReturns = {stakeReturns} />

        <style jsx>{`
          .glow-button {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
            }
            `}</style>
      </div>
    </div>
  );
}
