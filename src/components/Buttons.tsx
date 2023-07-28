"use client";
import { FunctionComponent, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  className?: string;
}>;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`px-6  py-2 rounded-md bg-[var(--primary)] transition duration-300 font-regular${
        className !== undefined ? " " + className : ""
      }`}
    >
      {children}
    </button>
  );
};

export const ButtonPrimary: FunctionComponent<ButtonProps> = (props) => (
  <Button
    {...props}
    className={
      props.className + " text-white hover:bg-[var(--primaryVariant1)]"
    }
  />
);
export const ButtonSecondary: FunctionComponent<ButtonProps> = (props) => (
  <Button
    {...props}
    className={
      props.className +
      " border border-[var(--primary)] text-[var(--primary)] bg-transparent py-2 hover:text-white hover:bg-[var(--primary)]"
    }
  />
);
