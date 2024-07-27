import { ICrowdFund } from '@/models/crowdfund.model'
import React from 'react'
import Image from 'next/image'
import DonateButton from './DonateButton'

type CrowdFundCardProps = {
    crowdfund: ICrowdFund,
}

const CrowdFundCard = ({ crowdfund }: CrowdFundCardProps) => {

    return (
        <>
            <div className="flex flex-col h-1/3 h-max-1/3 w-[90%] outline outline-[#2F4F4F] rounded-lg justify-between">
                <div className="p-2 w-full h-full">
                    <div className="flex gap-2 w-full items-center">
                        <h1 className="font-semibold">Request by {crowdfund.requester}</h1>
                        <h2 className="text-[#707072] text-sm align-bottom">{crowdfund.dateRequested.toDateString()}</h2>
                    </div>
                    <h1 className="line-clamp-2">{crowdfund.description}</h1>
                </div>
                <div className="flex p-2 w-full justify-between items-end">
                    <div className="flex">
                    <Image 
                            src={require('@/models/klt.png')} 
                            width={32}
                            height={30}
                            alt="Kilat Coin"
                            className="object-contain"
                            />
                        <h1 className="p-2">{crowdfund.amountRequested} KLT</h1>
                    </div>
                    <div>
                        <DonateButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CrowdFundCard