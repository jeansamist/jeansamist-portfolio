"use client";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

export const Line: FunctionComponent = () => {
  return (
    <motion.div
      className="sub"
      initial={{ opacity: 0, scaleX: 0, x: "-50%", y: "0.5em" }}
      whileInView={{ opacity: 1, scaleX: 1, x: "-50%", y: "0.5em" }}
      transition={{
        delay: 0.8,
        duration: 0.5,
      }}
    ></motion.div>
  );
};
