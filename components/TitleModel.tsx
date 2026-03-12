"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

const TitleModel = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-x-3 text-3xl font-bold tracking-tight md:text-4xl">
        {words.map((word, index) => (
          <motion.span key={index} variants={child}>
            {word}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="h-1 w-16 rounded-full bg-blue-600"
      />
    </div>
  );
};

export default TitleModel;
