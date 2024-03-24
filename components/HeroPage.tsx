"use client";

import {createClient} from '@/utils/supabase/client'
import { useTheme } from "next-themes";
import { Advent_Pro } from "next/font/google";
import Image from "next/image";
import HeroTextAnimation from "./HeroTextAnimation";

const advent = Advent_Pro({ weight: "700", subsets: ["latin"] });

const HeroPage = async () => {
  const supabase = createClient()
  
  const {data} =  await supabase.from('herotext').select('*').single()

  // const { theme, setTheme } = useTheme();

  return (
    <div className='relative w-full bg-gradient-to-br from-pink-800 via-gray-900 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 px-4 py-12 md:py-20'>
      <div className={`${advent.className}`}>
        <div className='h-[150px] w-full max-w-lg xl:max-w-2xl xl:ml-28 tracking-wider text-white text-4xl md:text-5xl font-bold text-center capitalize '>
          <HeroTextAnimation
            text_1={data.text_1}
            text_2={data.text_2}
            text_3={data.text_3}
            text_4={data.text_4}
          />
        </div>
      </div>

      <div className='relative w-full max-w-md aspect-square'>
        <Image
          alt='hero image'
          priority
          src='/hero_img.webp'
          // width={500}
          // height={500}
          fill
        />
      </div>
    </div>
  );
};

export default HeroPage;
