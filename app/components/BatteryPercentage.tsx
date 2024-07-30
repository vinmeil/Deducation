import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

type BatteryPercentageProps = {
  user: any;
  batteryPercentage: number;
}

const BatteryPercentage = ({ user, batteryPercentage }: BatteryPercentageProps) => {
  return (
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
  )
}

export default BatteryPercentage