"use client";
import { FunctionComponent } from "react";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";
export const Swipedown: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="absolute hidden lg:flex lg:flex-col items-center gap-2 animate-bounce repeat-infinite duration-1000 bottom-0 left-1/2 -translate-x-1/2 translate-y-[150%] xl:translate-y-[250%]">
      {/* <div className="scroll-down">Scroll Down</div> */}
      <ArrowBigDownDash size={40} />
    </div>
  );
};
