'use client';

import React from "react";
import { CgProfile } from "react-icons/cg";
import { ConnectButton } from "@mysten/dapp-kit";

export default function Page() {

    return(
        <>
          <div className="h-screen flex flex-col items-center mt-10 gap-8">
              <div>
                  <CgProfile className="text-9xl" style={{color: "white"}}/>
              </div>
              <div>
                  <ConnectButton />
              </div>
              <div className="p-4 flex w-[80%] h-[7%] outline outline-[#2F4F4F] rounded-lg justify-between items-center shadow-glow">
                  <h1>Electricity Produced</h1>
                  <h1 className="mr-4">100KwH</h1>
              </div>

              <div className="p-4 flex w-[80%] h-[7%] outline outline-[#2F4F4F] rounded-lg justify-between items-center shadow-glow">
                  <h1>Loan Status</h1>
                  <h1 className="mr-8">71%</h1>
              </div>

              <div className="p-4 flex w-[80%] h-[7%] outline outline-[#2F4F4F] rounded-lg justify-between items-center shadow-glow">
                  <h1>Total Rewards Mined</h1>
                  <h1 className="mr-4">200 KLT</h1>
              </div>
                  
          </div>
          <style jsx>{`
              .shadow-glow {
                box-shadow: 0 0 10px 2px rgba(47, 79, 79, 0.5);
              }
            `}</style>
        </>
    )
}