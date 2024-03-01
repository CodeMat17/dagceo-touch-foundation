"use client";

import { useTheme } from "next-themes";
import { Rubik_Bubbles, Rubik_Maps, Single_Day } from "next/font/google";
import Image from "next/image";
import HeroTextAnimation from "./HeroTextAnimation";

const singleDay = Single_Day({ weight: "400" });
const rubikBubbles = Rubik_Bubbles({ weight: "400", subsets: ["latin"] });
const rubikMaps = Rubik_Maps({ weight: "400", subsets: ["latin"] });

const HeroPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='relative w-full min-h-screen lg:h-screen bg-gradient-to-br from-pink-800 via-gray-900 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 py-12 sm:py-20 px-4'>
      {/* ================ */}
      {/* <div
        className={`absolute md:left-20 lg:left-40 xl:left-[200px] z-40 w-full h-screen flex pt-[150px] sm:pt-0 sm:items-center xl:justify-center   xl:max-w-3xl `}>
        "Transforming compassion into action for a more equitable world..."
      </div> */}
      {/* ================= */}
      {/* <div className='absolute -right-44 md:-right-10 lg:right-0 top-0'>
        <div className='relative w-[550px] h-screen'>
          <Image alt='' priority fill src='/bg-rebg.png' />
        </div>
      </div> */}
      {/* ============= */}
      <div className='h-[200px] w-full lg:max-w-lg xl:max-w-2xl xl:ml-28 tracking-wider text-white ${rubikBubbles.className} text-4xl md:text-5xl font-semibold text-center px-4 capitalize '>
        <HeroTextAnimation />
      </div>
      <div className=''>
        <Image
          alt='hero image'
          priority
          src='/hero_img.png'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default HeroPage;
