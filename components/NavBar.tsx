"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  // console.log(setTheme);

  return (
    <div
      className={`p-4 sticky top-0 z-50 w-full ${
        theme === "dark" ? "bg-slate-950" : "bg-gray-100"
      }`}>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
        <p>LOGO</p>
        <div className='flex items-center gap-4 text-lg'>
          <ThemeToggleButton />
          <div className='hidden sm:flex gap-4'>
            <Link
              href='/'
              className='hover:text-blue-600 transition transform duration-300 hover:scale-110'>
              Home
            </Link>
            <Link
              href='/about-us'
              className='whitespace-nowrap hover:text-blue-600 transition transform duration-300 hover:scale-110'>
              About Us
            </Link>
            <Link
              href='/our-programs'
              className='hover:text-blue-600 transition transform duration-300 hover:scale-x-110'>
              Programs
            </Link>
            <Link
              href='/get-involved'
              className='whitespace-nowrap hover:text-blue-600 transition transform duration-300 hover:scale-110'>
              Get Involved
            </Link>
            <Link
              href='/blog'
              className='hover:text-blue-600 transition transform duration-300 hover:scale-110'>
              Blog
            </Link>
            <Link
              href='/contact-us'
              className='hover:text-blue-600 transition transform duration-300 hover:scale-110 whitespace-nowrap'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
