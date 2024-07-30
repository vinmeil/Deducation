import React from 'react'

const VerticalBattery = ({ validatorPercentage }: { validatorPercentage: number }) => {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-5 mx-4 h-1/2 mt-[50px]">
        <div className="flex flex-col justify-center w-1/2 min-w-[150px] max-w-[200px] items-center">
          <p className="flex justify-center font-bold w-full text-xl">Validator</p>
          <p className="flex items-center justify-center mix-blend-difference font-bold text-lg">
              {validatorPercentage}%
            </p>
        </div>
        <div className="flex flex-col justify-center w-1/2 min-w-[150px] max-w-[200px] items-center">
          <p className="flex justify-center font-bold w-full text-xl">Personal Use</p>
          <p className="flex items-center justify-center mix-blend-difference font-bold text-lg">
              {100 - validatorPercentage}%
            </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 mx-4 h-1/2 mt-10 relative">
        <div className="bg-secondary bg-opacity-30 rounded-lg h-[300px] w-1/2 min-w-[150px] max-w-[200px] border-secondary border-opacity-20 border-3 p-3 flex flex-col justify-end">
          <div className="w-full flex justify-center">
            <div className="absolute top-[-20px] bg-secondary bg-opacity-30 h-[20px] w-[50px] rounded-t-lg"></div>
          </div>
          <div
            className="bg-gradient-to-tr from-primary to-accent w-full rounded-md bottom-0"
            style={{ height: `${validatorPercentage}%` }}
            ></div>
        </div>
        <div className="bg-secondary bg-opacity-30 rounded-lg h-[300px] w-1/2 min-w-[150px] max-w-[200px] border-secondary border-opacity-20 border-3 p-3 flex flex-col justify-end">
          <div className="w-full flex justify-center">
            <div className="absolute top-[-20px] bg-secondary bg-opacity-30 h-[20px] w-[50px] rounded-t-lg"></div>
          </div>
          <div
            className="bg-gradient-to-tr from-primary to-accent w-full rounded-md bottom-0"
            style={{ height: `${(100 - validatorPercentage)}%` }}
            ></div>
        </div>
      </div>
    </div>
  )
}

export default VerticalBattery