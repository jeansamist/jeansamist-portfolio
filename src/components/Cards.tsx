"use client";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import Image, { StaticImageData } from "next/image";
export type CardProps = PropsWithChildren<{
  className?: string;
  title?: ReactNode;
  footer?: ReactNode;
}>;

export const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  title,
  footer,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-1em",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      className={`hover:border-[var(--primaryOpact)] border border-slate-300 p-6 rounded-md bg-white transition duration-300 flex flex-col gap-4 shadow-md${
        className !== undefined ? " " + className : ""
      }`}
    >
      {title && <div className="card-title font-bold text-2xl">{title}</div>}
      {children}
      {footer && <div className="card-footer">{footer}</div>}
    </motion.div>
  );
};

export type ServiceCardProps = PropsWithChildren<{
  name: ReactNode;
  image: string | StaticImageData;
  description: ReactNode;
}>;

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <Card className="max-w-[400px] w-full">
      <div className="flex flex-col gap-4">
        <Image
          src={image}
          alt="management softwares"
          className="service-card-img rounded"
          priority={false}
        />
        <div className="name font-bold text-2xl">{name}</div>
        <div className="description">{description}</div>
        <div className="flex justify-center gap-4 items-center">
          <ButtonPrimary className=" w-full">Ask for a quote</ButtonPrimary>
          <ButtonSecondary className=" w-full">Archievements</ButtonSecondary>
        </div>
      </div>
    </Card>
  );
};