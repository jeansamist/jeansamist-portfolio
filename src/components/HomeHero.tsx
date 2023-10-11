import { FunctionComponent } from "react";
import Image from "next/image";
import me from "@/images/me.png";
import { Button } from "./ui/button";
import { AtSign, Github, Instagram, Twitter, ArrowDown01 } from "lucide-react";
import Link from "next/link";
import { Swipedown } from "./swipedown";
export const HomeHero: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="hero bg-violet-200 px-8  py-8 w-[calc(100%-64px)] h-min-[calc(100vh-103.25px-32px)]  md:h-min-[calc(100vh-64px-32px)] md:h-[calc(100vh-64px-32px)] translate-x-[32px] rounded-3xl relative">
      <div className="lg:container h-full md:flex md:flex-col md:items-center lg:flex-row-reverse lg:justify-between">
        <div className="w-full md:w-[400px] h-[600px] bg-white rounded-2xl flex justify-center relative z-0 content-end items-end overflow-hidden">
          <Image src={me} alt="me" className="max-w-none w-[200%]" />
        </div>
        <div className="text-center lg:text-left mt-8">
          <div className="mb-1">Hi there, I'm</div>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-black">
            BAHA Ephraim
          </h1>
          <div className="mt-4">
            Fullstack developer | Web and mobile developer
          </div>
          <div className="mt-4 flex items-center justify-center lg:justify-start space-x-4">
            <Link href={"https://www.instagram.com/i.am.ephra"}>
              <Instagram />
            </Link>
            <Link href={"https://twitter.com/jeansamist"}>
              <Twitter />
            </Link>
            <Link href={"https://github.com/jeansamist"}>
              <Github />
            </Link>
          </div>
        </div>
      </div>
      <Swipedown />
    </div>
  );
};
