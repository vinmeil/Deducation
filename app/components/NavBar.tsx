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
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <nav className = "w-full p-4 bg-background fixed top-0 left-0 right-0 position-sticky z-50">
            <div className="justify-between mx-auto px-4 lg:max-w-7x1 items-center flex md:px-8">
                <Image
                  src="/assets/images/logo-black.png"
                  alt="Deducation"
                  width={200}
                  height={20}
                  className="hidden lg:block"
                />
                <div className="opacity-0 pointer-events-none hidden xl:block">
                  <ConnectButton />
                </div>

                <div className="gap-5 hidden lg:flex center">
                    <PCNavLinks />
                </div>
                <Image
                  src="/assets/images/logo-black.png"
                  alt="Deducation"
                  className="opacity-0 pointer-events-none hidden xl:block"
                  width={200}
                  height={20}
                />
            
                <div className="hidden lg:block">
                  <ConnectButton />
                </div>

                {/* mobile burger menu*/}
                <button
                    className="lg:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick = {() => setDropdown(!dropdown)}
                >
                    {dropdown ? 
                    <IoMdClose /> : 
                    <GiHamburgerMenu />
                    }
                </button>
            </div>
            <div
                className={`items-center justify-between w-full
                ${
                    dropdown ? 'block' : 'hidden'
                    }`}
                onClick = {() => setDropdown(!dropdown)}
            >
                <div className={`flex flex-col font-medium p-4 mt-4 rounded-lg lg:hidden rtl:space-x-reverse bg-secondary bg-opacity-50`}>
                    <div className = "flex flex-col items-center mx-auto p-2">
                    <Image
                      src="/assets/images/logo-black.png"
                      alt="Deducation"
                      className="opacity-0 pointer-events-none hidden xl:block"
                      width={200}
                      height={20}
                    />
                    </div>
                    <ul>
                        <MobileNavLinks />
                    </ul>
                </div>
            </div>
        </nav>
      )
}

function MobileNavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? 'block py-2 px-3 rounded-lg bg-primary text-background' : 'block py-2 px-3 rounded hover:bg-gray-100 dark:border-gray-700'}`}
            >
              <li>{link.name}</li>
            </Link>
          );
        })}
      </>
    );
  }

function PCNavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? 'text-primary font-semibold text-2xl' : 'font-semibold text-2xl'}`}
            >
              <h2>{link.name}</h2>
            </Link>
          );
        })}
      </>
    );
}