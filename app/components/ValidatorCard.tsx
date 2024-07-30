import { validatorOptions } from '@/constants';
import { IUser } from '@/models/user.model';
import React from 'react'
import { FaPlay, FaStop } from 'react-icons/fa';
import "../globals.css";

type ValidatorCardProps = {
  user: IUser;
  isValidatorRunning: boolean;
  setValidatorPercentage: (value: number) => void;
  account: any;
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  setIsUserModalOpen: (value: boolean) => void;
  isUserModalOpen: boolean;
}

const ValidatorCard = ({
  user,
  isValidatorRunning,
  setValidatorPercentage,
  account,
  setIsModalOpen,
  isModalOpen,
  setIsUserModalOpen,
  isUserModalOpen
}: ValidatorCardProps) => {
  return (
    <div className="flex justify-center animated-border">
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-5 rounded-xl">
        <div className="p-5">
          <p className="sm:mt-1 font-semibold md:flex md:justify-center">Validator Share</p>
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
              onClick={() => account ? setIsModalOpen(!isModalOpen) : setIsUserModalOpen(!isUserModalOpen)}
            >
              {isValidatorRunning ? <FaStop /> : <FaPlay />}
              {isValidatorRunning ? `Stop Validator` : `Run Validator` }
            </button>
          </div>
        </div>

        <style jsx>{`
            .glow-button {
              box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
              }
        `}</style>
      </div>
    </div>
  )
}

export default ValidatorCard