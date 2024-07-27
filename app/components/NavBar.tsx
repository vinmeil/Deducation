"use client";

import Link from 'next/link'
import { links } from '@/app/constants/nav-links'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@mysten/dapp-kit';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div>
      Navbar
    </div>
  )
};
