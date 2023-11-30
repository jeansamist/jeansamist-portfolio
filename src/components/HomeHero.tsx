"use client";
import { FunctionComponent, useState, useEffect } from "react";
import me from "@/images/me.png";
import Image from "next/image";

import { AtSign, Github, Instagram, Twitter, ArrowDown01 } from "lucide-react";
import Link from "next/link";
import { TypingEffect } from "./TypingEffect";
import { motion } from "framer-motion";
export const HomeHero: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="w-full min-h-screen h-[calc(100vh-100px)] h-min-[calc(100vh-100px)]  md:h-min-[calc(100vh-64px)] md:h-[calc(100vh-64px)] ">
      <div className="container h-full flex items-center justify-center">
        <div className="flex flex-col space-y-16 items-center">
          <div className="w-64 h-64 overflow-hidden rounded-full bg-zinc-800">
            <Image src={me} className="w-64 h-64 object-cover" alt="me" />
          </div>
          <div>
            <div className="text-4xl font-bold text-center leading-tight">
              Hi I&apos;m{" "}
              <motion.span
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="font-mono bg-zinc-900 text-white px-2"
              >
                <TypingEffect text="BAHA Ephraim" />
              </motion.span>
              ,
              <br /> But you can call me{" "}
              <motion.span
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1 }}
                className="font-mono bg-zinc-900 text-white px-2"
              >
                <TypingEffect text="Jeansamist" />
              </motion.span>
              .
            </div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ scaleX: 1 }}
            className="w-64 h-px bg-zinc-300"
          ></motion.div>
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <Link href={"https://www.instagram.com/i.am.ephra"}>
              <Instagram />
            </Link>
            <Link href={"https://twitter.com/jeansamist"}>
              <Twitter />
            </Link>
            <Link href={"https://github.com/jeansamist"}>
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
