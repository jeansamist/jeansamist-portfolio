import { FunctionComponent } from "react";
import me from "@/images/me.png";
import Image from "next/image";
import { Button } from "./button";
import {
  FileDownloadIcon,
  Mail01Icon,
  Linkedin02Icon,
  GithubIcon,
  PinterestIcon,
  DribbbleIcon,
  NewTwitterIcon,
} from "hugeicons-react";
import Link from "next/link";

export type HomeHeaderProps = {};

export const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  return (
    <div
      className={
        "container flex flex-row gap-4 min-h-[calc(100vh-72.67px)] items-center"
      }
    >
      <div className="flex flex-col gap-4 w-full">
        <Image
          src={me}
          alt="me"
          className="rounded-full aspect-square w-32 bg-primary border-8 border-white"
        />
        <p className="text-primary text-xl">Frontend developer</p>
        <h1 className="text-3xl font-bold">
          I&apos;m <span className="text-primary">BAHA Ephraim</span> but you
          can <br /> call me <span className="text-primary">Jeansamist</span>
        </h1>
        <p className="text-silver text-lg">
          I&apos;m BAHA Ephraim, deeply passionate about technology. Every day,
          I delve into various tech domains like graphic design and programming,
          constantly discovering and creating. 😉
        </p>
        {/* Contact buttons */}
        <div className="flex gap-4">
          <Button>
            <Mail01Icon />
            Contact me
          </Button>
          <Button variant="secondary">
            <FileDownloadIcon />
            Download CV
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-6 grid-rows-2 gap-4 w-full aspect-video">
          <Link
            href={"https://github.com/jeansamist"}
            target={"_blank"}
            className="relative fill-effect overflow-hidden  hover:bg-[#000]/30 p-4 bg-onyx transition-colors rounded-lg col-span-3 flex flex-col justify-between"
          >
            <div className="absolute bg-[#24292E] z-0 top-12 left-12 w-1 h-1 opacity-0 fill-effect-thumb transition-all duration-300"></div>
            <div className="relative z-10 h-16 w-16 rounded-full bg-[#24292E] flex items-center justify-center">
              <GithubIcon />
            </div>
            <div className="relative z-10">
              <h1 className="text-2xl font-bold">Github</h1>
              <p className="text-silver text-sm">Follow me on Github</p>
            </div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/jeansamist/"}
            target={"_blank"}
            className="p-4 bg-onyx transition-colors rounded-lg col-span-3 hover:bg-[#0A66C2]/50 flex flex-col justify-between relative fill-effect overflow-hidden"
          >
            <div className="absolute bg-[#0A66C2] z-0 top-12 left-12 w-1 h-1 opacity-0 fill-effect-thumb transition-all duration-300"></div>
            <div className="h-16 w-16 rounded-full bg-[#0A66C2] flex items-center justify-center relative z-10">
              <Linkedin02Icon />
            </div>
            <div className="relative z-10">
              <h1 className="text-2xl font-bold">LinkedIn</h1>
              <p className="text-silver text-sm">Connect with me on LinkedIn</p>
            </div>
          </Link>
          <Link
            href={"https://www.pinterest.com/jeansamist/"}
            target={"_blank"}
            className="p-4 bg-onyx transition-colors rounded-lg col-span-2 hover:bg-[#BD081C]/50 flex flex-col justify-between relative fill-effect overflow-hidden"
          >
            <div className="absolute bg-[#BD081C] z-0 top-12 left-12 w-[2px] h-[2px] opacity-0 fill-effect-thumb transition-all duration-300"></div>
            <div className="h-16 w-16 rounded-full bg-[#BD081C] flex items-center justify-center relative z-10">
              <PinterestIcon />
            </div>
            <div className="relative z-10">
              <h1 className="text-2xl font-bold">Pinterest</h1>
              <p className="text-silver text-sm">Discover me</p>
            </div>
          </Link>
          <Link
            href={"https://www.dribbble.com/jeansamist"}
            target={"_blank"}
            className="p-4 bg-onyx transition-colors rounded-lg col-span-2 hover:bg-[#EA4C89] flex flex-col justify-between"
          >
            <div className="h-16 w-16 rounded-full bg-[#EA4C89] flex items-center justify-center">
              <DribbbleIcon />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dribbble</h1>
              <p className="text-silver text-sm">@jeansamist</p>
            </div>
          </Link>
          <Link
            href={"https://www.twitter.com/jeansamist"}
            target={"_blank"}
            className="p-4 bg-onyx transition-colors rounded-lg col-span-2 hover:bg-[#000000] flex flex-col justify-between"
          >
            <div className="h-16 w-16 rounded-full bg-[#000000] flex items-center justify-center">
              <NewTwitterIcon />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Twitter</h1>
              <p className="text-silver text-sm">@jeansamist</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
