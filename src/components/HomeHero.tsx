import { FunctionComponent } from "react";
import Image from "next/image";
import me from "@/images/me.png";
export const HomeHero: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="hero w-full h-[calc(100vh-160px)] md:h-[calc(100vh-65px)] min-h-[830px] md:min-h-[auto]">
      <div className="content w-full h-full bg-gradient-to-b from-white to-transparent">
        <div className="container h-full flex flex-col md:flex-row-reverse md:gap-16 items-center justify-around">
          <Image
            src={me}
            alt="BAHA Ephraim"
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
          />
          <div className="text text-center md:text-left">
            <div className="text-5xl font-semibold">
              Hey there! I&apos;m <br />
              <span className="font-extrabold text-primary">BAHA EPHRAIM</span>.
            </div>
            <div className="text-xl text-foreground mt-4 font-medium">
              Fullstack Developer | Web and Mobile Developer
            </div>
            <div className="text-lg text-foreground mt-4">
              I&apos;m Ephraim, a passionate fullstack developer with over{" "}
              <b>5 years of experience</b>. I create web and mobile experiences
              unique, combining a user-friendly interface and powerful features
              for bring your digital ideas to life the most ambitious
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
