"use client"; // Ensure this is at the top

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "@/app/globals.css"; // Ensure the path is correct to import global styles

const Navbar = () => {
  const pathname = usePathname(); // Use usePathname instead of useRouter
  
  return (
    <div className="w-screen flex">
      <ul className="flex w-screen gap-16 items-center ">
        <li>
          <Image height={100} width={100} src="/img/my-recipes-logo.png" alt="mylogo" />
        </li>
        <li className="h-full">
          <Link href="/" className={` ${pathname === '/' ? 'h-full flex items-center bg-gray-900 w-24 justify-center' : 'h-full flex items-center hover:bg-gray-900 w-24 justify-center'}`}>
            Home
          </Link>
        </li>
        <li className="h-full">
          <Link href="/recipes" className={`h-full flex items-center w-24 justify-center ${pathname === '/recipes' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900'}`}>
            Recipes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
