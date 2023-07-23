"use client";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
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
    <div
      className={`border-slate-900 border p-6 rounded-md bg-slate-950 transition duration-300 flex flex-col gap-4 hover:bg-slate-900${
        className !== undefined ? " " + className : ""
      }`}
    >
      {title && <div className="card-title font-bold text-2xl">{title}</div>}
      {children}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
