"use client";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
export const Topbar: FunctionComponent = () => {
  const [blur, setblur] = useState(false);
  const onScroll = useCallback(() => {
    if (window.scrollY >= 100) {
      setblur(true);
    } else {
      setblur(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const variants: Variants = {
    init: {
      opacity: 0,
      y: "-1em",
    },
    fade: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="init"
      animate="fade"
      transition={{
        duration: 1,
      }}
      className={
        "w-full p-6 fixed top-0 transition-all duration-300 delay-300 left-0 z-10 bg-slate-950 bg-opacity-0 flex justify-center" +
        (blur ? " backdrop-blur bg-opacity-30" : "")
      }
    >
      <div className="gap-8 lg:w-full xl:w-3/4 2xl:w-2/3 w-full flex justify-between flex-col lg:flex-row items-center content-center">
        <div className="brand font-bold text-2xl">Jeansamist</div>
        <div className="hidden links md:flex gap-8 flex-col md:flex-row items-center content-center">
          <a href="/">Biography</a>
          <a href="/">Services</a>
          <a href="/">Experiance</a>
          <a href="/">Works and Projects</a>
          <a href="/" className="px-6 py-2 rounded-md bg-indigo-700">
            Contact me
          </a>
        </div>
      </div>
    </motion.div>
  );
};
