"use client";

// components/HamburgerMenu.js
import { motion } from "framer-motion";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleMenu}
        className=' focus:outline-none flex items-center'>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='w-8 h-8  flex justify-center items-center'>
          {/* <div
            className={`bg-gray-500 h-1 mb-1 ${
              isOpen ? "rotate-180" : ""
            }`}></div>
          <div
            className={`bg-gray-500 h-1 mb-1 ${
              isOpen ? "opacity- mt-2" : ""
            }`}></div>
          <div
                      className={`bg-gray-500 h-1 ${isOpen ? "-rotate-90 " : ""}`}></div> */}
          {isOpen ? (
            <X className='text-red-600 text-2xl w-10 h-10 font-bold' />
          ) : (
            <AlignRight className='text-2xl w-10 h-10 font-bold' />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`absolute top-12 right-0 bg-gray-300/90 dark:bg-gray-900/90 px-2 py-4 shadow-md w-[280px] rounded-lg ${
          isOpen ? "block" : "hidden"
        }`}>
        {/* Add your menu links here */}

        <Link
          href='/'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          HOME
        </Link>
        <Link
          href='/about-us'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          ABOUT US
        </Link>
        <Link
          href='/our-programme'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          PROGRAMME
        </Link>
        <Link
          href='/get-involved'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          GET INVOLVED
        </Link>
        <Link
          href='/blog'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg tracking-wider text-lg font-semibold'>
          BLOG
        </Link>
        <Link
          href='/contact-us'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          CONTACT US
        </Link>

        {/* Add more links as needed */}
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
