"use client";

import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { RiRefund2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathName = usePathname();

  return (
    <>
    {pathName === '/' ? <DashboardNavBar /> : null}
    {pathName === '/crowdfund' ? <CrowdfundNavBar /> : null}
    {pathName === '/profile' ? <ProfileNavBar /> : null}
    </>
    );
}

function DashboardNavBar() {
    return (
        <nav className = "w-full px-2 py-4 bg-[#29292b] fixed bottom-0 position-sticky z-50">
          <div className="justify-between mx-auto px-2 gap-4 items-center flex">
            <Link href="/" className="flex gap-2 items-center w-full h-full p-1 justify-center border border-solid bg-[#26e400] bg-opacity-15 border-[#26e400] border-opacity-15 rounded-lg">
              <AiOutlineHome className="text-xl" style={{color:'#26e400', opacity:20}}/>
            </Link>
            <Link href="crowdfund" className="flex gap-2 items-center w-full h-full p-2 justify-center"> 
              <RiRefund2Line className="text-xl" style={{color:'white'}}/>
              <h1 className="text-xs">Crowdfund</h1>
            </Link>
            <Link href="profile" className="flex gap-2 items-center w-full h-full p-2 justify-center">
                <CgProfile className="text-xl" style={{color:'white'}}/>
                <h1 className="text-xs">Profile</h1>
            </Link>
          </div>
        </nav>
    );
}

function CrowdfundNavBar() {
    return (
        <nav className = "w-full px-2 py-4 bg-[#29292b] fixed bottom-0 position-sticky z-50">
          <div className="justify-between mx-auto px-2 gap-4 items-center flex">
            <Link href="/" className="flex gap-2 items-center w-full h-full p-2 justify-center">
                <AiOutlineHome className="text-xl" style={{color:'white'}}/>
                <h1 className="text-xs">Dashboard</h1>
            </Link>
            <Link href="crowdfund" className="flex gap-2 items-center w-full h-full p-1 justify-center border border-solid bg-[#26e400] bg-opacity-15 border-[#26e400] border-opacity-15 rounded-lg"> 
                <RiRefund2Line className="text-xl" style={{color:'#26e400'}}/>
            </Link>
            <Link href="profile" className="flex gap-2 items-center w-full h-full p-2 justify-center">
                <CgProfile className="text-xl" style={{color:'white'}}/>
                <h1 className="text-xs">Profile</h1>
            </Link>
          </div>
        </nav>
    );
}

function ProfileNavBar() {
    return(
        <nav className = "w-full px-2 py-4 bg-[#29292b] fixed bottom-0 position-sticky z-50">
            <div className="justify-between mx-auto px-2 gap-4 items-center flex">
                <Link href="/" className="flex gap-2 items-center w-full h-full p-2 justify-center">
                    <AiOutlineHome className="text-xl" style={{color:'white'}}/>
                    <h1 className="text-xs">Dashboard</h1>
                </Link>
                    <Link href="crowdfund" className="flex gap-2 items-center w-full h-full p-2 justify-center"> 
                    <RiRefund2Line className="text-xl" style={{color:'white'}}/>
                <h1 className="text-xs">Crowdfund</h1>
                </Link>
                <Link href="profile" className="flex gap-2 items-center w-full h-full p-1 justify-center border border-solid bg-[#26e400] bg-opacity-15 border-[#26e400] border-opacity-15 rounded-lg">
                    <CgProfile className="text-xl" style={{color:'#26e400'}}/>
                </Link>
            </div>
        </nav>
    );
}