"use client";

import { useTheme } from "next-themes";
import { Rubik_Bubbles, Rubik_Maps, Single_Day } from "next/font/google";
import Image from "next/image";

const singleDay = Single_Day({ weight: "400" });
const rubikBubbles = Rubik_Bubbles({ weight: "400", subsets: ["latin"] });
const rubikMaps = Rubik_Maps({ weight: "400", subsets: ["latin"] });

const HeroPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='relative w-full h-screen bg-gradient-to-br from-pink-800 via-gray-900'>
      <div></div>
      <div
        className={`absolute md:left-20 lg:left-40 xl:left-[200px] z-40 w-full h-screen flex pt-[150px] sm:pt-0 sm:items-center xl:justify-center tracking-wider text-white ${rubikBubbles.className} max-w-lg  xl:max-w-3xl text-4xl md:text-5xl xl:text-6xl font-semibold text-center px-4 capitalize`}>
        "Transforming compassion into action for a more equitable world..."
      </div>
      <div className='absolute -right-44 md:-right-10 lg:right-0 top-0'>
        <div className='relative w-[550px] h-screen'>
          <Image alt='' priority fill src='/bg-rebg.png' />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
