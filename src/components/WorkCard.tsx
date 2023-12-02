"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";

import Link from "next/link";
import { StackCardProps } from "./StackCard";
import { Service } from "@/types/Service";
export type WorkCardProps = {
  cover: StaticImageData | string;
  title: string;
  description: ReactNode;
  service?: Service;
  links?: {
    name: ReactNode;
    href: string;
  }[];
  stacks?: StackCardProps[];
};

export const WorkCard: FunctionComponent<WorkCardProps> = ({
  title,
  links,
  description,
  cover,
  stacks,
}) => (
  <div className="max-w-96 w-full flex flex-col space-y-4 hidden-card border-b hover:border-zinc-300 border-transparent pb-8">
    <div className="w-full aspect-video bg-zinc-300">
      <Image src={cover} alt={title} />
    </div>
    <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
    <motion.div
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
      animate={{ scaleX: 1 }}
      className="w-1/2 h-px bg-zinc-300"
    ></motion.div>
    <p>{description}</p>
    {stacks && (
      <div className="space-x-3 text-sm text-zinc-400 italic">
        {stacks.map((stack, key) => (
          <span key={key}>{stack.title}</span>
        ))}
      </div>
    )}
    {links && (
      <div className="more space-x-4">
        {links.map((link, key) => (
          <Link href={link.href} key={key} target="_blank">
            <span className="font-mono text-xl underline bg-zinc-900 text-white px-2">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    )}
  </div>
);
