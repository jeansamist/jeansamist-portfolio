"use client";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export type StackCardProps = {
  icon: IconType;
  title: string;
};

export const StackCard: FunctionComponent<StackCardProps> = ({
  title,
  icon: Icon,
}) => (
  <div className="p-8 text-2xl hidden-card flex flex-col space-y-4 items-center hover:bg-zinc-100">
    <Icon size={50} />
    <motion.div
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
      animate={{ scaleX: 1 }}
      className="w-32 h-px bg-zinc-300"
    ></motion.div>
    <div>{title}</div>
  </div>
);
