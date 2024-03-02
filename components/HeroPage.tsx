"use client";

import { useTheme } from "next-themes";
import {
  Advent_Pro,
  Rubik_Bubbles,
  Rubik_Maps,
  Single_Day,
} from "next/font/google";
import Image from "next/image";
import HeroTextAnimation from "./HeroTextAnimation";

const singleDay = Single_Day({ weight: "400" });
const rubikBubbles = Rubik_Bubbles({ weight: "400", subsets: ["latin"] });
const rubikMaps = Rubik_Maps({ weight: "400", subsets: ["latin"] });
const advent = Advent_Pro({ weight: "700", subsets: ["latin"] });

const HeroPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='relative w-full bg-gradient-to-br from-pink-800 via-gray-900 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-4 py-12 md:py-20'>
      <div className={`${advent.className}`}>
        <div className='h-[150px] w-full max-w-lg xl:max-w-2xl xl:ml-28 tracking-wider text-white text-4xl md:text-5xl font-bold text-center capitalize '>
          <HeroTextAnimation />
        </div>
      </div>

      <div className='relative w-full max-w-md aspect-square'>
        <Image
          alt='hero image'
          priority
          src='/hero_img.png'
          // width={500}
          // height={500}
          fill
        />
      </div>
    </div>
  );
};

export default HeroPage;
