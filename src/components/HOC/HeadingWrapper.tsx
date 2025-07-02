import React, { FC } from "react";
import { motion } from "framer-motion";
import { ContainerProps } from "./hocTypes";

const HeadingWrapper: FC<ContainerProps> = ({ children }) => {
  return (
    <motion.figcaption
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex mx-auto relative overflow-hidden uppercase tracking-[3px] sm:tracking-[7px] text-[#ffd700] text-sm:text-lg md:text-2xl px-6 pt-10 pb-6 rounded-full justify-center"
    >
      <span className="text-[#334353]/90">[</span>
      {children}
      <span className="text-[#334353]/90">]</span>
    </motion.figcaption>
  );
};

export default HeadingWrapper;
