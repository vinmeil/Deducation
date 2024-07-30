import React, { useState } from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import Image from 'next/image';

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

  const handleStake = () => {
    setStakeAmount(stakeAmount + Number(inputAmount));
    setInputAmount("");
    setIsStaked(!isStaked);
    setIsOpen(false);
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
          <h1 className="font-semibold p-2 text-center">Stake Sui to validator</h1>
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