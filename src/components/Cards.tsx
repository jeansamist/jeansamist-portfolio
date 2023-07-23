"use client";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
export type CardProps = PropsWithChildren<{
  className?: string;
  title?: ReactNode;
}>;

export const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <div
      className={`p-6 rounded-md w-1/3 bg-slate-950 transition duration-300 flex flex-col gap-4 hover:bg-slate-900${
        className !== undefined ? " " + className : ""
      }`}
    >
      {title && <div className="card-title font-bold text-3xl">{title}</div>}
      {children}
    </div>
  );
};
