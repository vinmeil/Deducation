import { validatorOptions } from '@/constants';
import { IUser } from '@/models/user.model';
import React from 'react'
import { FaPlay, FaStop } from 'react-icons/fa';

type ValidatorCardProps = {
  user: IUser;
  isValidatorRunning: boolean;
  setValidatorPercentage: (value: number) => void;
  isUserConnected: boolean;
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  setIsUserModalOpen: (value: boolean) => void;
  isUserModalOpen: boolean;
}

const ValidatorCard = ({
  user,
  isValidatorRunning,
  setValidatorPercentage,
  isUserConnected,
  setIsModalOpen,
  isModalOpen,
  setIsUserModalOpen,
  isUserModalOpen
}: ValidatorCardProps) => {
  return (
    <>
      <p className="mx-6 mt-8 font-semibold md:flex md:justify-center">Validator Share</p>
      <div className="flex flex-row items-center justify-center gap-2 w-full max-sm:gap-2 max-sm:justify-between mt-3">
        {validatorOptions.map((option, index) => {
          const activeButtonClass = "rounded-lg bg-primary text-background px-3 py-1 w-[60px]";
          const inactiveButtonClass = "rounded-lg bg-secondary bg-opacity-20 text-secondary py-1 w-[60px]";
          const isButtonActive = (user.isLoaning && index < 2) || isValidatorRunning;

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
          onClick={() => isUserConnected ? setIsModalOpen(!isModalOpen) : setIsUserModalOpen(!isUserModalOpen)}
        >
          {isValidatorRunning ? <FaStop /> : <FaPlay />}
          {isValidatorRunning ? `Stop Validator` : `Run Validator` }
        </button>
      </div>
    </>
  )
}

export default ValidatorCard