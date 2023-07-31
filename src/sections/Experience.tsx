import { FunctionComponent } from "react";
import { Line } from "@/components/Line";
import { ExperienceCard } from "@/components/Cards";
import skysoft_logo from "./../../public/images/skysoft-logo.png";
export const Experience: FunctionComponent = () => {
  return (
    <section id="experience" className="w-full min-h-screen text-center">
      <div className="bg-main pb-28">
        <div className="content flex flex-col mx-auto gap-28 lg:w-full xl:w-3/4 2xl:w-2/3 w-full">
          <div className="text flex flex-col mx-auto gap-14">
            <div className="title-sub font-bold text-6xl mt-28">
              EXPERIENCE
              <Line />
            </div>
            <div className="short-text px-8">
              With more than 5 years of experience as a fullstack developer, I
              am your ideal partner to carry out your digital projects. My
              mastery of the latest technologies, such as React, Laravel, and
              Django, allows me to create tailor-made, robust and innovative
              solutions that perfectly meet your needs and exceed your
              expectations. So discover my journey from the beginning.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <ExperienceCard
              description="With more than 5 years of experience as a fullstack developer, I
              am your ideal partner to carry out your digital projects. My
              mastery of the latest technologies, such as React, Laravel, and"
              end={false}
              ets_name="Indepandant"
              image={skysoft_logo}
              start={new Date()}
              title={"Developer Stagiare"}
            />
            <ExperienceCard
              description="With more than 5 years of experience as a fullstack developer, I
              am your ideal partner to carry out your digital projects. My
              mastery of the latest technologies, such as React, Laravel, and"
              end={false}
              ets_name="Indepandant"
              image={skysoft_logo}
              start={new Date()}
              title={"Developer Stagiare"}
            />
            <ExperienceCard
              description="With more than 5 years of experience as a fullstack developer, I
              am your ideal partner to carry out your digital projects. My
              mastery of the latest technologies, such as React, Laravel, and"
              end={false}
              ets_name="Indepandant"
              image={skysoft_logo}
              start={new Date()}
              title={"Developer Stagiare"}
            />
            <ExperienceCard
              description="With more than 5 years of experience as a fullstack developer, I
              am your ideal partner to carry out your digital projects. My
              mastery of the latest technologies, such as React, Laravel, and"
              end={false}
              ets_name="Indepandant"
              image={skysoft_logo}
              start={new Date()}
              title={"Developer Stagiare"}
            />
            <ExperienceCard
              description="With more than 5 years of experience as a fullstack developer, I
              am your ideal partner to carry out your digital projects. My
              mastery of the latest technologies, such as React, Laravel, and"
              end={false}
              ets_name="Indepandant"
              image={skysoft_logo}
              start={new Date()}
              title={"Developer Stagiare"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};