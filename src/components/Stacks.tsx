"use client";
import { stacks } from "@/helpers/stacks";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import { StackCard } from "./StackCard";
import TypingEffect from "./TypingEffect";
import { VisibilityDetector } from "./VisibilityDetector";
export const Stacks: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="my-16">
      <div className="container">
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
                    <TypingEffect text="Stacks" />
                  </motion.span>
                </VisibilityDetector>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-64 h-px bg-zinc-300"></div>
          <div className="leading-normal  font-medium text-center text-xl md:text-3xl">
            The tools I work with
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatePresence>
              {stacks.map((stack, key) => (
                <VisibilityDetector key={key}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1 }}
                  >
                    <StackCard {...stack} />
                  </motion.div>
                </VisibilityDetector>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
