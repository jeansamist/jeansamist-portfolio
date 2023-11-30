"use client";
import TypingEffect from "@/components/TypingEffect";
import { services } from "@/helpers/services";
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
            <div className="text-4xl font-bold text-center leading-tight">
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
            <div className="text-2xl font-medium">
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

          <div className="flex space-x-8">
            <div className="p-8 text-2xl hidden-card flex flex-col space-y-4 items-center hover:bg-zinc-100">
              <FaReact size={50} />
              <motion.div
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ scaleX: 1 }}
                className="w-32 h-px bg-zinc-300"
              ></motion.div>
              <div>ReactJS</div>
              <div className="more">
                <Link href={"#"}>
                  <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
                    View projects
                  </span>
                </Link>
              </div>
            </div>
            <div className="p-8 text-2xl hidden-card flex flex-col space-y-4 items-center hover:bg-zinc-100">
              <FaReact size={50} />
              <motion.div
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ scaleX: 1 }}
                className="w-32 h-px bg-zinc-300"
              ></motion.div>
              <div>React Native</div>
              <div className="more">
                <Link href={"#"}>
                  <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
                    View projects
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
