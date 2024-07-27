"use client";

import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { RiRefund2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {

  return (
    <nav className = "w-full px-6 py-4 bg-[#29292b] fixed bottom-0 position-sticky z-50">
      <div className="justify-between mx-auto px-2 items-center flex">
        <Link href="/">
          <AiOutlineHome className="text-5xl" style={{color:'white'}}/>
        </Link>
        <Link href="crowdfund">
          <RiRefund2Line className="text-5xl" style={{color:'white'}}/>
        </Link>
        <Link href="profile">
        <CgProfile className="text-5xl" style={{color:'white'}}/>
        </Link>
      </div>
    </nav>
    )
}
