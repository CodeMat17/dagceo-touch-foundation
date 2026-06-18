"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroTextAnimationProps {
  prefix: string;
  suffix: string;
  texts: string[];
}

const HeroTextAnimation = ({ prefix, suffix, texts }: HeroTextAnimationProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 3500);
    return () => clearInterval(id);
  }, [texts.length]);

  return (
    <span className="inline">
      {prefix}{" "}
      <span className="relative inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline bg-gradient-to-r from-violet-400 via-pink-400 to-rose-400 bg-clip-text text-transparent"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {suffix && <>{" "}{suffix}</>}
    </span>
  );
};

export default HeroTextAnimation;
