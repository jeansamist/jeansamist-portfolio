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
            <div className="p-8 text-2xl  flex flex-col space-y-4 items-center hover:bg-zinc-100 hidden-card">
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

          <div>
            <span className="font-mono text-3xl bg-zinc-900 text-white px-2">
              <TypingEffect text={"Realisations"} />
            </span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ scaleX: 1 }}
            className="w-64 h-px bg-zinc-300"
          ></motion.div>
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="max-w-full w-96 flex flex-col space-y-4 hidden-card border-b hover:border-zinc-300 border-transparent pb-8">
              <div className="w-full h-52 bg-zinc-300"></div>
              <h3 className="font-bold text-xl md:text-2xl">Le Phoenix</h3>
              <motion.div
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ scaleX: 1 }}
                className="w-1/2 h-px bg-zinc-300"
              ></motion.div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis, dolore itaque eaque porro dignissimos illum eligendi
                praesentium, impedit eos blanditiis delectus. Itaque commodi
                libero nisi, modi ipsum esse incidunt.
              </p>
              <div className="more space-x-4">
                <Link href={"#"}>
                  <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
                    Open
                  </span>
                </Link>
                <Link href={"#"}>
                  <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
                    Github
                  </span>
                </Link>
              </div>
            </div>
            <div className="max-w-full w-96 flex flex-col space-y-4 hidden-card border-b hover:border-zinc-300 border-transparent pb-8">
              <div className="w-full h-52 bg-zinc-300"></div>
              <h3 className="font-bold text-xl md:text-2xl">Le Phoenix</h3>
              <motion.div
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                animate={{ scaleX: 1 }}
                className="w-1/2 h-px bg-zinc-300"
              ></motion.div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis, dolore itaque eaque porro dignissimos illum eligendi
              </p>
              <div className="more space-x-4">
                <Link href={"#"}>
                  <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
                    Open
                  </span>
                </Link>
                <Link href={"#"}>
                  <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
                    Github
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
