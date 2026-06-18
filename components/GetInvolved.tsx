"use client";

import { motion } from "framer-motion";
import { Flower2, HandshakeIcon, Leaf } from "lucide-react";
import Link from "next/link";
import TitleModel from "./TitleModel";

const ways = [
  {
    Icon: Flower2,
    title: "We Need Volunteers",
    description:
      "Give your time and skills to help drive meaningful change in communities that need it most.",
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    accent: "border-pink-200/60 dark:border-pink-900/40",
    highlight: "group-hover:border-pink-300 dark:group-hover:border-pink-700",
  },
  {
    Icon: Leaf,
    title: "Become A Sponsor",
    description:
      "Partner with us to fund programmes that uplift lives and create lasting social impact.",
    gradient: "from-emerald-500 to-green-400",
    glow: "shadow-emerald-500/20",
    accent: "border-emerald-200/60 dark:border-emerald-900/40",
    highlight: "group-hover:border-emerald-300 dark:group-hover:border-emerald-700",
  },
  {
    Icon: HandshakeIcon,
    title: "Make A Donation",
    description:
      "Every contribution, big or small, brings us closer to the world we are working to build.",
    gradient: "from-violet-500 to-indigo-400",
    glow: "shadow-violet-500/20",
    accent: "border-violet-200/60 dark:border-violet-900/40",
    highlight: "group-hover:border-violet-300 dark:group-hover:border-violet-700",
  },
];

const GetInvolved = () => {
  return (
    <section className="w-full bg-gray-50 py-24 md:py-32 dark:bg-gray-950/80">
      <div className="mx-auto max-w-5xl px-6">
        <TitleModel text="Get Involved" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map(({ Icon, title, description, gradient, glow, accent, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col items-center gap-5 rounded-3xl border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-900/60 ${accent} ${highlight}`}>
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg ${glow}`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <Link
                href="/get-involved"
                className="mt-auto rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
