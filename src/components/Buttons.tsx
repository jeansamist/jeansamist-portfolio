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
      className={`px-6 py-2 rounded-md bg-indigo-700 transition duration-300 font-regular hover:bg-indigo-900${
        className !== undefined ? " " + className : ""
      }`}
    >
      {children}
    </button>
  );
};

export const ButtonPrimary: FunctionComponent<ButtonProps> = (props) => (
  <Button {...props} />
);
export const ButtonSecondary: FunctionComponent<ButtonProps> = (props) => (
  <Button
    {...props}
    className={
      props.className +
      " border border-indigo-700 text-indigo-700 bg-opacity-0 py-2"
    }
  />
);
