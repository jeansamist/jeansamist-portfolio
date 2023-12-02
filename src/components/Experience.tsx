"use client";
import { experiences } from "@/helpers/experiences";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import { ExperienceCard } from "./ExperienceCard";
import TypingEffect from "./TypingEffect";
import { VisibilityDetector } from "./VisibilityDetector";

export const Experience: FunctionComponent = ({
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
                    <TypingEffect text="Experience" />
                  </motion.span>
                </VisibilityDetector>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-64 h-px bg-zinc-300"></div>
          <div className="leading-normal  font-medium text-center text-xl md:text-3xl">
            Small part of my experience
          </div>
          <div className="flex gap-16 flex-col md:flex-row">
            {[experiences[2], experiences[3]].map((achievement, key) => (
              <ExperienceCard {...achievement} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
