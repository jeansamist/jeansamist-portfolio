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

export type ServiceCardProps = {
  name: ReactNode;
  image: string | StaticImageData;
  description: ReactNode;
} & CardProps;

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
          alt={name ? name.toString() : ""}
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

export type ExperienceCardProps = {
  image: string | StaticImageData;
  ets_name: string;
  start: Date;
  end: false | Date;
  description: ReactNode;
} & CardProps;

export const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  image,
  title,
  ets_name,
  start,
  end,
  description,
}) => (
  <Card className="w-full sm:w-[350px] md:w-[45%] xl:w-full">
    <div className="flex gap-4 flex-col xl:flex-row items-center">
      <Image
        src={image}
        alt={title ? title.toString() : ""}
        className="w-[150px] h-[150px] object-contain"
        priority={false}
      />
      <div className="flex flex-col gap-4 xl:text-left">
        <div className="flex gap-2 flex-col">
          <div className="title font-bold text-2xl">{title}</div>
          <div className="text-xs opacity-80">
            {ets_name} | {start.toDateString()}{" "}
            {end !== false && "- " + end.toDateString()}
          </div>
          <div className="text-xs opacity-80 text-primary">
            {end === false && "I'm working there"}
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  </Card>
);
