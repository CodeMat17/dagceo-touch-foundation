import { createClient } from "@/utils/supabase/client";
import { Advent_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import HeroTextAnimation from "./HeroTextAnimation";

const advent = Advent_Pro({ weight: "700", subsets: ["latin"] });

const HeroPage = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("herotext").select("*").single();

  return (
    <section className="relative w-full overflow-hidden bg-gray-950 py-20 md:py-28 lg:py-36">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 via-gray-950 to-indigo-950/40" />

      {/* Atmospheric glow blobs */}
      <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-pink-700/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-700/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-800/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">

        {/* ── Left: text ── */}
        <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left lg:max-w-xl">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-pink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
            Making a Difference
          </span>

          {/* Animated headline */}
          <div
            className={`${advent.className} min-h-[200px] text-4xl font-bold leading-tight tracking-wide text-white md:text-5xl xl:text-6xl`}>
            <HeroTextAnimation
              text_1={data.text_1}
              text_2={data.text_2}
              text_3={data.text_3}
              text_4={data.text_4}
            />
          </div>

          {/* Subtext */}
          <p className="max-w-md text-base leading-relaxed text-gray-400">
            Empowering communities through compassion, education, and
            sustainable impact — because every life deserves a touch of change.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/get-involved"
              className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-105 hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-95">
              Get Involved
            </Link>
            <Link
              href="/about-us"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/10 active:scale-95">
              Learn More
            </Link>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="relative flex-shrink-0">
          {/* Glow behind the frame */}
          <div className="absolute inset-0 scale-105 rounded-3xl bg-gradient-to-br from-pink-600/25 to-indigo-600/20 blur-2xl" />

          {/* Image frame */}
          <div className="relative h-[320px] w-[320px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:h-[420px] md:w-[420px]">
            <Image
              alt="Hero image"
              priority
              src="/hero_img.webp"
              fill
              className="object-cover"
            />
            {/* Subtle bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
          </div>

          {/* Decorative dot grid */}
          <div className="absolute -bottom-5 -right-5 grid grid-cols-4 gap-2 opacity-40">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            ))}
          </div>

          {/* Decorative top-left accent ring */}
          <div className="absolute -top-5 -left-5 h-16 w-16 rounded-full border-2 border-dashed border-pink-500/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
