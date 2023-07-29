"use client";
import {
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import Image, { StaticImageData } from "next/image";
export type CardProps = PropsWithChildren<{
  className?: string;
  title?: ReactNode;
  footer?: ReactNode;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}>;

export const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  title,
  footer,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`hover:border-[var(--primaryOpact)] border border-main_ p-6 rounded-md bg-white transition duration-300 flex flex-col gap-4 shadow-main_${
        className !== undefined ? " " + className : ""
      }`}
    >
      {title && <div className="card-title font-bold text-2xl">{title}</div>}
      {children}
      {footer && <div className="card-footer">{footer}</div>}
    </motion.div>
  );
};

export type ServiceCardProps = PropsWithChildren<
  {
    name: ReactNode;
    image: string | StaticImageData;
    description: ReactNode;
  } & CardProps
>;

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  name,
  description,
  image,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Card
      className="max-w-[400px] w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
          <ButtonPrimary className=" w-full">See more</ButtonPrimary>
          {/* <ButtonSecondary className=" w-full">Archievements</ButtonSecondary> */}
        </div>
      </div>
    </Card>
  );
};
