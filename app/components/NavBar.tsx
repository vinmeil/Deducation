"use client";

import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { RiRefund2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';

export default function NewNavBar() {
    const pathName = usePathname();

  return (
    <nav className = "w-full px-6 py-1 bg-[#29292b] fixed bottom-0 position-sticky z-50">
      <div className="justify-between mx-auto px-2 gap-4 items-center flex">
        <Link href="/" className="flex gap-2 items-center bg-red-500 w-full h-full p-2 justify-center">
          <AiOutlineHome className="text-xl" style={{color:'white'}}/>
          <h1 className="text-xs">Dashboard</h1>
        </Link>
        <Link href="crowdfund" className="flex gap-2 items-center bg-blue-500 w-full h-full p-2 justify-center"> 
          <RiRefund2Line className="text-xl" style={{color:'white'}}/>
          <h1 className="text-xs">Crowdfund</h1>
        </Link>
        <Link href="profile" className="flex gap-2 items-center bg-purple-400 w-full h-full p-2 justify-center">
            <CgProfile className="text-xl" style={{color:'white'}}/>
            <h1 className="text-xs">Profile</h1>
        </Link>
      </div>
    </nav>
    )
}
