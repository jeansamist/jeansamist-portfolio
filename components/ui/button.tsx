import { ButtonHTMLAttributes, forwardRef, FunctionComponent } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
const buttonVariants = cva(
  "font-semibold inline-flex justify-center focus-visible:outline-none outline-none disabled:opacity-50 rounded-xl items-center transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-background shadow hover:bg-primary-700",
      },
      size: {
        default: "h-9 px-4 py-2",
        lg: "h-16 px-6 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
