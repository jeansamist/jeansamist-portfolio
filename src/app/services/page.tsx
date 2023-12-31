"use client";
import TypingEffect from "@/components/TypingEffect";
import { VisibilityDetector } from "@/components/VisibilityDetector";
import { services } from "@/helpers/services";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function service() {
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
                <TypingEffect text={"Services"} />
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              animate={{ scaleX: 1 }}
              className="w-64 h-px bg-zinc-300"
            ></motion.div>
            <div className="text-xl text-center md:text-2xl font-medium">
              I&apos;am offering a large variety of services as a developer
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 container py-16">
        <AnimatePresence>
          {services.map((service, key) => (
            <VisibilityDetector key={key}>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1 }}
                className="p-8 border-b hover:border-zinc-300 border-transparent hidden-card flex flex-col space-y-4"
              >
                <h3 className="text-zinc-400 text-lg">{service.title}</h3>
                <div className="w-64 h-px bg-zinc-300"></div>
                <p className="">{service.description}</p>
                <div className="more">
                  <Link href={"/services/" + key.toString()}>
                    <span className="font-mono bg-zinc-900 text-white px-2 underline">
                      View more
                    </span>
                  </Link>
                </div>
              </motion.div>
            </VisibilityDetector>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
