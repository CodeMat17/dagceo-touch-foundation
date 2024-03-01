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
  return (
    <motion.h2
      className='text-center text-3xl md:text-4xl font-semibold whitespace-pre-wrap px-5'
      variants={quote}
      initial='initial'
      whileInView='animate'>
      {text.split(" ").map((word: any, index: any) => (
        <motion.span key={index} variants={singleWord}>
          {word}&nbsp;
        </motion.span>
      ))}
      {/* {text} */}
    </motion.h2>
  );
};

export default TitleModel;
