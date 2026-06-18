"use client";

import { createClient } from "@/utils/supabase/client";
import { motion } from "framer-motion";
import { Footprints, PlugZap, ScanEyeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TitleModel from "./TitleModel";

const icons = [
  { Icon: Footprints, gradient: "from-violet-500 to-indigo-400", glow: "shadow-violet-500/25" },
  { Icon: ScanEyeIcon, gradient: "from-pink-500 to-rose-400", glow: "shadow-pink-500/25" },
  { Icon: PlugZap, gradient: "from-amber-500 to-orange-400", glow: "shadow-amber-500/25" },
];

const Statements = () => {
  const [statements, setStatements] = useState<any[]>([]);

  useEffect(() => {
    const supabase = createClient();
    Promise.all([
      supabase.from("ourmission").select("*").single(),
      supabase.from("ourvalues").select("*").single(),
      supabase.from("ourimpact").select("*").single(),
    ]).then(([{ data: mission }, { data: values }, { data: impact }]) => {
      if (mission && values && impact) {
        setStatements([
          { id: mission.id, title: "Our Mission", content: mission.content, index: 0 },
          { id: values.id, title: "Our Values", content: values.content, index: 1 },
          { id: impact.id, title: "Our Impact", content: impact.content, index: 2 },
        ]);
      }
    });
  }, []);

  return (
    <section className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <TitleModel text="Our Statements" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {statements.map((item, i) => {
            const { Icon, gradient, glow } = icons[item.index];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800/60 dark:bg-gray-900/60 dark:hover:border-gray-700">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg ${glow}`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-extrabold tracking-wide">{item.title}</h3>
                <p className="line-clamp-4 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                  {item.content}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center">
          <Link
            href="/about-us"
            className="rounded-full border border-gray-200 bg-white px-8 py-3 text-sm font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
            Read more
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Statements;
