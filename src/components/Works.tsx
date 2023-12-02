"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import TypingEffect from "./TypingEffect";
import { VisibilityDetector } from "./VisibilityDetector";
import { achievements } from "@/helpers/achievements";
import { WorkCard } from "./WorkCard";

export const Works: FunctionComponent = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div>
      <div className="container mt-16">
        <div className="flex flex-col space-y-8 items-center ">
          <div>
            <div className="text-3xl md:text-5xl font-bold leading-tight  text-center">
              <AnimatePresence>
                <VisibilityDetector>
                  <motion.span
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1 }}
                    className="font-mono bg-zinc-900 text-white px-2"
                  >
                    <TypingEffect text="Achievements" />
                  </motion.span>
                </VisibilityDetector>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-64 h-px bg-zinc-300"></div>
          <div className="leading-normal  font-medium text-center text-xl md:text-3xl">
            Discover the extent of my work
          </div>
          <div className="w-full flex gap-16 flex-col md:flex-row">
            {[achievements[0], achievements[1]].map((achievement, key) => (
              <WorkCard {...achievement} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
