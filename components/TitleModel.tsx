"use client";

import { motion } from "framer-motion";

const TitleModel = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-extrabold tracking-tight md:text-4xl">
        {text}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="h-1 w-20 origin-left rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
      />
    </div>
  );
};

export default TitleModel;
