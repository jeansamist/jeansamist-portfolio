"use client";
import { FunctionComponent } from "react";
import TypingEffect from "./TypingEffect";
import { VisibilityDetector } from "./VisibilityDetector";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/helpers/services";
export const Services: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div>
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
                    <TypingEffect text="Services" />
                  </motion.span>
                </VisibilityDetector>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-64 h-px bg-zinc-300"></div>
          <div className="leading-normal  font-medium text-center text-xl md:text-3xl">
            I&apos;am offering a large variety of services as a developer
          </div>
          <div className="grid md:grid-cols-2 gap-4">
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
      </div>
    </div>
  );
};
