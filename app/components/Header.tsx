import { ConnectButton } from '@mysten/dapp-kit'
import React from 'react'

type HeaderProps = {
  account: any;
  isUserConnected: boolean;
  kilatBalance: number;
}

const Header = ({ account, isUserConnected, kilatBalance }: HeaderProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col truncate">
        {account && isUserConnected && (
          <>
          <p className="font-bold truncate max-w-[200px]">{account.address}</p>
          <p className="text-sm font-semibold">{Number(kilatBalance) / 10 ** 3} KLT</p>
        </>)}
        </div>
        <ConnectButton />
      </div>
  </div>
  )
}

export default Header