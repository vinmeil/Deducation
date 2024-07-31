import React from 'react'
import "../globals.css";
import { IStake } from '@/models/stake.model';
import Image from 'next/image';
import { useState } from 'react';
import StakeModal from './StakeModal';

type StakeCardProps = {
    stake: IStake;
}

const StakeCard = ({stake}: StakeCardProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isStaked, setIsStaked] = useState(false);
    const [stakeAmount, setStakeAmount] = useState(stake.stakeAmount);
    const originalAmount = stake.stakeAmount;

    const handleStake = () => {
        setIsOpen(true);
        if(isStaked) {
            setStakeAmount(originalAmount);
        }
    }

return (
    <div className="mt-5 flex justify-center animated-border">
        <div className="flex bg-white bg-opacity-5 rounded-xl w-full">
            <div className="p-5 flex flex-col gap-4 w-full">
                <p className="font-semibold">{stake.title}</p>

                <div>
                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex gap-2">
                        <p>Staked: {stakeAmount} Sui</p>
                        <Image 
                            src='/images/sui-sui-logo.png'
                            width={24}
                            height={24}
                            alt="Sui Coin"
                            />
                        </div>
                        <button
                            onClick = {() => handleStake()}
                            className={`items-center justify-center px-4 py-2 bg-gradient-to-tl ${isStaked ? "from-[#ba3030] to-[#df1b1b]" : "from-primary to-accent"} 
                            text-background rounded-lg glow-button font-semibold`}
                            >
                            {isStaked ? "Unstake" : "Stake"}
                        </button>
                    </div>
                </div>
            </div>

            <StakeModal isOpen={isOpen} setIsOpen={setIsOpen} isStaked={isStaked} stakeAmount={stakeAmount} setIsStaked={setIsStaked} setStakeAmount={setStakeAmount}/>

            <style jsx>{`
                .glow-button {
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    </div>
);
}

export default StakeCard;