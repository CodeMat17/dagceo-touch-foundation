"use client";

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.5,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const TitleModel = ({ text }: any) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className='flex overflow-hidden text-3xl text-center justify-center'>
      {/* <motion.h2
        className='max-w-xs border text-center text-3xl md:text-4xl font-semibold whitespace-pre-wrap text-wrap px-5'
        variants={quote}
        initial='initial'
        whileInView='animate'>
        {text.split(" ").map((word: any, index: any) => (
          <motion.span key={index} variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
        {text}
      </motion.h2> */}
      {words.map((word: any, index: any) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index} className="text-center">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TitleModel;
