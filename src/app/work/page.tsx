// import { Services } from "@/components/Services";
"use client";
import { WorkCard } from "@/components/WorkCard";
import TypingEffect from "@/components/TypingEffect";
import { achievements } from "@/helpers/achievements";
import { motion } from "framer-motion";
import Link from "next/link";

import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export default function work() {
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
                <TypingEffect text={"Work"} />
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              animate={{ scaleX: 1 }}
              className="w-64 h-px bg-zinc-300"
            ></motion.div>
            <div className="text-xl text-center md:text-2xl font-medium">
              Discover the extent of my work, my achievements and my future
              projects
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="flex flex-col space-y-8">
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
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              perPage: 3,
              gap: 12,
              breakpoints: {
                930: {
                  perPage: 2,
                },
                650: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack>
              {achievements.map((achievement, key) => (
                <SplideSlide key={key}>
                  <div className="flex justify-center">
                    <WorkCard {...achievement} />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows absolute top-0 right-0 space-x-4 translate-x-4 -translate-y-1/2">
              <button className="splide__arrow splide__arrow--prev p-2 rounded-full bg-zinc-100">
                <FiChevronLeft />
              </button>
              <button className="splide__arrow splide__arrow--next p-2 rounded-full bg-zinc-100">
                <FiChevronRight />
              </button>
            </div>
          </Splide>
          {/* <div className="flex gap-8 flex-col flex-wrap justify-between md:flex-row">
            {achievements.map((achievement, key) => (
              <WorkCard {...achievement} key={key} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
