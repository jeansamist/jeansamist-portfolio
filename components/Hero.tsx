import { FunctionComponent } from "react";
import grid from "@/images/grid.png";
import me384 from "@/images/me384.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconGithubHero, IconLinkedInHero, IconTwitterHero } from "@/lib/icons";

export const Hero: FunctionComponent = () => {
  return (
    <div
      className={
        "w-full min-h-screen py-6 pt-36 md:py-4 md:pt-28 flex items-center"
      }
      id="about"
      style={{
        background: `url("${grid.src}") no-repeat center`,
        backgroundSize: "75%",
      }}
    >
      <div className="container flex flex-col items-center text-center text-base sm:text-lg md:text-xl space-y-4 md:space-y-6">
        <Image
          src={me384}
          alt="Jeansamist logo"
          className="w-60 md:w-80 lg:w-96"
        />
        <div className="text-primary-200">Frontend developer</div>
        <div className="text-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full lg:w-2/3">
          I&apos;m <span className="text-primary">BAHA Ephraim</span> but you
          can call me <span className="text-primary">Jeansamist</span>
        </div>
        <div className="w-full lg:w-2/3">
          I&apos;m BAHA Ephraim, deeply passionate about technology. Every day,
          I delve into various tech domains like graphic design and programming,
          constantly discovering and creating. 😉
        </div>
        <div className="flex flex-col md:flex-row gap-6 mg:gap-4 items-center scale-90 md:scale-100">
          <Button size={"lg"}>Download my CV</Button>
          <div className="flex items-center gap-4 scale-90 md:scale-100">
            <Link href={"https://github.com/jeansamist/"}>
              <IconGithubHero />
            </Link>
            <Link href={"https://linkedin.com/jeansamist/"}>
              <IconLinkedInHero />
            </Link>
            <Link href={"https://twitter.com/jeansamist/"}>
              <IconTwitterHero />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
