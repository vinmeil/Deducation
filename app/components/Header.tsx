import { ConnectButton } from '@mysten/dapp-kit'
import React from 'react'

import { KILAT_COIN_DECIMAL } from '../constants/util'

type HeaderProps = {
  account: any;
  kilatBalance: number;
  kilatCoinIcon: string | null | undefined;
}

const Header = ({ account, kilatBalance, kilatCoinIcon }: HeaderProps) => {
  return (
    <div className="flex flex-row justify-end items-center gap-2">
        {account && <div className="flex flex-col truncate mr-auto">
          <p className="font-bold truncate max-w-[200px]">{account.address}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{Number(kilatBalance) / 10 ** KILAT_COIN_DECIMAL} KLT</p>
            {kilatCoinIcon && <img src={kilatCoinIcon} alt="Kilat Coin" className="size-4" />}
          </div>
        </div>}
        <ConnectButton />
      </div>
  )
}

export default Header