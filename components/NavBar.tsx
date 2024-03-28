"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import LogoComponent from "./LogoComponent";
import ThemeToggleButton from "./ThemeToggleButton";
// import {auth} from '@clerk/nextjs'

const NavBar = () => {
  // const {userId} = auth()
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <div
      className={`px-4 py-2 sticky top-0 z-50 w-full bg-gray-100 dark:bg-gray-950`}>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
        <LogoComponent classnames='w-[72px] h-[72px] animate-animation' />

        <div className='flex items-center gap-4 text-lg'>
          <ThemeToggleButton />
          <div className='md:hidden'>
            <HamburgerMenu />
          </div>
          <div className='hidden md:flex gap-5'>
            <Link
              href='/'
              className={`hover:text-blue-600 transition transform hover:scale-110 whitespace-nowrap border-b-4 pb-1 ${
                pathname === "/"
                  ? " duration-700 text-blue-600  border-blue-600"
                  : "border-transparent"
              }`}>
              Home
            </Link>
            <Link
              href='/about-us'
              className={`hover:text-blue-600 transition transform hover:scale-110 whitespace-nowrap border-b-4 pb-1 ${
                pathname === "/about-us"
                  ? "duration-700 text-blue-600 border-blue-600"
                  : "border-transparent"
              }`}>
              About Us
            </Link>
            <Link
              href='/our-programme'
              className={`hover:text-blue-600 transition transform hover:scale-110 whitespace-nowrap border-b-4 pb-1 ${
                pathname === "/our-programme"
                  ? "duration-700 text-blue-600 border-blue-600 "
                  : "border-transparent"
              }`}>
              Programme
            </Link>
            <Link
              href='/get-involved'
              className={`hover:text-blue-600 transition transform hover:scale-110 whitespace-nowrap border-b-4 pb-1 ${
                pathname === "/get-involved"
                  ? "duration-700 text-blue-600 border-blue-600"
                  : "border-transparent"
              }`}>
              Get Involved
            </Link>
            <Link
              href='/blog'
              className={`hover:text-blue-600 transition transform hover:scale-110 whitespace-nowrap border-b-4 pb-1 ${
                pathname === "/blog"
                  ? "duration-700 text-blue-600 border-blue-600 "
                  : "border-transparent"
              }`}>
              Blog
            </Link>
            <Link
              href='/contact-us'
              className={`hover:text-blue-600 transition transform hover:scale-110 whitespace-nowrap border-b-4 pb-1 ${
                pathname === "/contact-us"
                  ? "duration-700 text-blue-600 border-blue-600"
                  : "border-transparent"
              }`}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
