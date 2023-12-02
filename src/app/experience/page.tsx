"use client";
import { ExperienceCard } from "@/components/ExperienceCard";
import TypingEffect from "@/components/TypingEffect";
import { VisibilityDetector } from "@/components/VisibilityDetector";
import { experiences } from "@/helpers/experiences";
import { services } from "@/helpers/services";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function experience() {
  return (
    <div className="xl:text-xl">
      <div className="py-16 bg-zinc-100">
        <div className="container">
          <div className="flex flex-col space-y-8 items-center">
            <div className="text-2xl md:text-4xl font-bold text-center leading-tight">
              My{" "}
              <motion.span
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1 }}
                className="font-mono bg-zinc-900 text-white px-2"
              >
                <TypingEffect text={"Experience"} />
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              animate={{ scaleX: 1 }}
              className="w-64 h-px bg-zinc-300"
            ></motion.div>
            <div className="text-xl text-center md:text-2xl font-medium">
              My journey from the beginning until now
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 container py-16">
        {experiences.map((experience, key) => (
          <ExperienceCard key={key} {...experience} />
        ))}
      </div>
    </div>
  );
}
