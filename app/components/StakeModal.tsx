import React, { useState } from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import Image from 'next/image';
import { getSuiAccounts} from '../utils/graphql';
import { useCurrentAccount} from '@mysten/dapp-kit';
import { Transaction } from "@mysten/sui/transactions";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isStaked: boolean;
  setIsStaked: React.Dispatch<React.SetStateAction<boolean>>;
  stakeAmount: number;
  setStakeAmount: React.Dispatch<React.SetStateAction<number>>;
};

const StakeModal = ({ isOpen, setIsOpen, isStaked, setIsStaked, stakeAmount, setStakeAmount }: ModalProps) => {
  const [inputAmount, setInputAmount] = useState<String>("");
  const [stakeAccount, setStakeAccount] = useState<String>("");
  const account = useCurrentAccount();
  const suiClient = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction({
      execute: async ({ bytes, signature }) =>
      await suiClient.executeTransactionBlock({
          transactionBlock: bytes,
          signature,
          options: {
          // Raw effects are required so the effects can be reported back to the wallet
          showRawEffects: true,
          showEffects: true,
          },
      }),
  });

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "2/3",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#181818",
      border: "none",
      padding: "0px",
    },
  };

  const stake = async () =>{
    if(account){
      const suiAccounts = await getSuiAccounts(account.address);
      if(suiAccounts){
        const tx = new Transaction();
        tx.moveCall({
            arguments: [tx.object(suiAccounts[0].address), tx.pure.u64(parseFloat(inputAmount.toString()) * 10**9)],
            target: `0x0ff6ebb0750bfda9dcf4edcd33838a52fa9f95084a2cc22f6078bf2c364987d7::staking::stake`,
        });
        signAndExecute({
            transaction: tx,
        },{onSuccess: async (result)=>{
            const objectId = result.effects?.created?.[0]?.reference?.objectId;
            if(objectId){
              setStakeAmount(stakeAmount + Number(inputAmount));
              setIsStaked(true);
              setStakeAccount(objectId);
              console.log("Staking Account:", objectId);
            }
        }});
        setInputAmount("");
        setIsOpen(false);
      }else{
        alert("No Balance Detected");
      }
    }else{
      alert("Wallet Not Connected");
    }
  }

  const unstake = async () =>{
    if(account){
      if(stakeAccount){
        const tx = new Transaction();
        tx.moveCall({
          arguments: [tx.object(stakeAccount.toString()), tx.object('0x608944a6b57cc8618460c8319327bb166777f9f7ca3ae418b4b3c142a76579f5')],
          target: `0x0ff6ebb0750bfda9dcf4edcd33838a52fa9f95084a2cc22f6078bf2c364987d7::staking::unstake`,
        });
        signAndExecute({
            transaction: tx,
        },{onSuccess: async ()=>{
          setIsStaked(false);
          setInputAmount("");
          setIsOpen(false);
        }});
      }else{
        alert("Error Happened")
      }
    }else{
      alert("Wallet Not Connected")
    }
  }

  
  const handleStake = async () => {
    if(isStaked){
      await unstake();
    }else{
      await stake();
    }
  };

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="p-5 h-full flex flex-col items-center justify-center gap-6 w-full">
          <h1 className="font-semibold p-2 text-center text-xl">Stake Sui to validator</h1>
          <Image
            src='/images/sui-sui-logo.png'
            width={64}
            height={64}
            alt="Sui Coin"
          />
          {!isStaked && (
            <input
              type="number"
              placeholder="Amount"
              className="bg-white text-black p-2 rounded-lg"
              onChange={(e) => setInputAmount((e.target.value))}
            />
          )}
          <div className="flex justify-between w-full">
            <button
              onClick={handleStake}
              className="items-center justify-center px-4 py-3 bg-gradient-to-tl from-primary to-accent
              text-background rounded-lg glow-button font-semibold"
            >
              {isStaked ? "Unstake" : "Stake"}
            </button>
            <button
              type="button"
              className="items-center justify-center p-2 py-3 bg-gradient-to-tl from-[#ba3030] to-[#df1b1b]
              text-background rounded-lg glow-button font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StakeModal;