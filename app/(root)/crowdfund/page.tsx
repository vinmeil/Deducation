import CrowdFundCard from "@/app/components/CrowdFundCard"
import { tempCrowdFund } from "@/data/mockData"

export default function Page() {
    return(
        <>
        <div className="flex flex-col items-center justify-center gap-6 mb-40 mt-10">
            <CrowdFundCard crowdfund={tempCrowdFund[0]} />
            <CrowdFundCard crowdfund={tempCrowdFund[1]} />
            <CrowdFundCard crowdfund={tempCrowdFund[2]} />
            <CrowdFundCard crowdfund={tempCrowdFund[3]} />
            <CrowdFundCard crowdfund={tempCrowdFund[4]} />
            <CrowdFundCard crowdfund={tempCrowdFund[5]} />
        </div>
        </>
    )
}