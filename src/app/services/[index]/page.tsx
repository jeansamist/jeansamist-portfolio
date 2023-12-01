"use client";
import { StackCard } from "@/components/StackCard";
import TypingEffect from "@/components/TypingEffect";
import { WorkCard } from "@/components/WorkCard";
import { services } from "@/helpers/services";
import { stacks } from "@/helpers/stacks";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaReact } from "react-icons/fa";

export default function Page({ params }: { params: { index: number } }) {
  const service = services[params.index];
  return (
    <div>
      <div className="py-16 bg-zinc-100">
        <div className="container">
          <div className="flex flex-col space-y-8 items-center">
            <div className="text-2xl md:text-4xl font-bold text-center leading-tight">
              <motion.span
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1 }}
                className="font-mono bg-zinc-900 text-white px-2"
              >
                <TypingEffect text={service.title} />
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              animate={{ scaleX: 1 }}
              className="w-64 h-px bg-zinc-300"
            ></motion.div>
            <div className="text-xl text-center md:text-2xl font-medium">
              {/* <div>+4 Projects</div> */}
              {service.shortDescription}
              {/* <div>+3 Years of practice</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="flex flex-col space-y-8">
          <div>
            <span className="font-mono text-3xl bg-zinc-900 text-white px-2">
              <TypingEffect text={"Stack"} />
            </span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ scaleX: 1 }}
            className="w-64 h-px bg-zinc-300"
          ></motion.div>

          <div className="flex gap-8 flex-col md:flex-row">
            {service.stacks.map((stack, key) => (
              <StackCard {...stacks[stack]} key={key} />
            ))}
          </div>

          {service.achievements && (
            <>
              <div>
                <span className="font-mono text-3xl bg-zinc-900 text-white px-2">
                  <TypingEffect text={"Achievements"} />
                </span>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ scaleX: 1 }}
                className="w-64 h-px bg-zinc-300"
              ></motion.div>
              <div className="flex gap-8 flex-col md:flex-row">
                {service.achievements.map((achievement, key) => (
                  <WorkCard {...achievement} key={key} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
