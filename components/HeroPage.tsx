"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroTextAnimation from "./HeroTextAnimation";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const HeroPage = () => {

  return (
    <section className='relative w-full overflow-hidden bg-gray-950 py-24 md:py-32 lg:py-40'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-violet-950/60 via-gray-950 to-pink-950/40' />

      {/* Animated blobs */}
      <motion.div
        className='absolute -top-56 -left-56 h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-3xl'
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className='absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-700/15 blur-3xl'
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <div className='absolute top-1/2 left-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-800/10 blur-3xl' />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

      {/* Content */}
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-2'>
        {/* Left: text */}
        <div className='flex flex-col items-center gap-8 text-center lg:items-start lg:text-left lg:max-w-2xl'>
          {/* Badge */}
          <motion.span
            {...fadeUp(0.1)}
            className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-300'>
            <span className='h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse' />
            Making a Difference
          </motion.span>

          {/* Animated headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className='text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl'>
            <h1>
              Restoring Hope Through Health, Education and Community Care.
            </h1>
            {/* <HeroTextAnimation
              prefix='Restoring Hope Through Health, Education and Community Care.'
              texts={[
                "every child can access quality education.",
                "no widow is left without support or dignity.",
                "clean environments are a right, not a privilege.",
                "healthcare reaches those who need it most.",
                "the girl child's future is never cut short.",
                "compassion drives every decision we make.",
                "communities are empowered to lift themselves.",
                "vulnerability is met with care, not neglect.",
              ]}
              suffix=''
            /> */}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.35)}
            className='max-w-md text-base font-medium leading-relaxed text-gray-400'>
            We support vulnerable children, the elderly, displaced persons, and
            underserved communities across Nigeria through evidence-based,
            life-changing health, education, and community support initiatives.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.45)}
            className='flex flex-wrap items-center justify-center gap-4 lg:justify-start'>
            <Link
              href='/get-involved'
              className='group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50 active:scale-95'>
              <span className='relative z-10'>Get Involved</span>
              <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-pink-600 to-violet-600 transition-transform duration-500 group-hover:translate-x-0' />
            </Link>
            <Link
              href='/about-us'
              className='rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/30 active:scale-95'>
              Learn More
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.55)}
            className='flex items-center gap-8 pt-2'>
            {[
              { value: "500+", label: "Lives Touched" },
              { value: "12+", label: "Programs" },
              { value: "5+", label: "Years Active" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className='flex flex-col items-center lg:items-start'>
                <span className='text-2xl font-extrabold text-white'>
                  {value}
                </span>
                <span className='text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className='relative flex-shrink-0'>
          {/* Outer glow ring */}
          <div className='absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-violet-600/30 to-pink-600/20 blur-2xl' />

          {/* Rotating dashed ring */}
          <motion.div
            className='absolute -inset-4 rounded-3xl border border-dashed border-violet-500/20'
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Image frame */}
          <div className='relative h-[340px] w-[340px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-violet-900/30 md:h-[440px] md:w-[440px]'>
            <Image
              alt='Hero image'
              priority
              src='/hero_img.webp'
              fill
              className='object-cover transition-transform duration-700 hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent' />
          </div>

          {/* Floating accent card */}
          <motion.div
            className='absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-gray-900/80 px-4 py-3 shadow-xl backdrop-blur-md'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500'>
              <span className='text-base'>✦</span>
            </div>
            <div>
              <p className='text-xs font-bold text-white'>Non-Profit</p>
              <p className='text-xs text-gray-400'>Registered Foundation</p>
            </div>
          </motion.div>

          {/* Dot grid */}
          <div className='absolute -bottom-5 -right-5 grid grid-cols-4 gap-2 opacity-30'>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className='h-1.5 w-1.5 rounded-full bg-violet-400' />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
