'use client';

import Header from "@/app/components/Header"
import { useCurrentAccount, useSuiClient } from "@mysten/dapp-kit"
import { useState, useEffect } from "react";
import { KILAT_COIN_TYPE } from "../../constants/util.ts";
import StakeCard from "@/app/components/StakeCard.tsx";
import { mockStakes } from "@/data/mockData.ts";

export default function Page() {
    const account = useCurrentAccount();
    const suiClient = useSuiClient();
    const [kilatBalance, setKilatBalance] = useState<number>(0);
    const [kilatCoinIcon, setKilatCoinIcon] = useState<string | null | undefined>("");
    
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

    return(
        <>
        <div className="flex flex-col m-3 h-full">
            <Header account={account} kilatBalance={kilatBalance} kilatCoinIcon={kilatCoinIcon} />
            <div className = "grid md:grid-cols-4 grid-cols-1 gap-10 mb-40 mt-10">
                {mockStakes.map((stake) => {
                    return(
                        <StakeCard stake={stake}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}   

