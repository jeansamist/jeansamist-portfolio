import { ButtonPrimary } from "@/components/Buttons";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import me from "./../../public/images/me.png";
export const Hero: FunctionComponent = () => (
  <section id="bio" className="hero w-full min-h-screen">
    <div className="w-full min-h-screen px-4 from-slate-100 bg-gradient-to-t pt-[80px] pb-8 flex justify-center">
      <div className="content flex flex-col-reverse justify-center items-center gap-16">
        <div className="description text-center flex flex-col gap-6">
          <div className="name text-6xl font-extrabold">
            <div className="line">BAHA</div>
            <div className="line text-[var(--primary)]">EPHRAIM</div>
          </div>
          <div className="bio">
            I am Ephraim, professional web developer with long time experiance
          </div>
          <div className="buttons flex gap-6 justify-center">
            <ButtonPrimary className="w-full">Contact Me</ButtonPrimary>
            <ButtonPrimary className="w-full">My projects</ButtonPrimary>
          </div>
        </div>
        <div className="me-image w-[300px] rounded-full overflow-hidden from-[var(--primary)] bord to-[var(--primaryVariant1)] bg-gradient-to-b">
          <Image
            src={me}
            alt="a photo of me"
            priority={true}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  </section>
);
