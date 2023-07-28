import { ButtonPrimary, ButtonSecondary } from "@/components/Buttons";
import { Card, ServiceCard } from "@/components/Cards";
import { FunctionComponent, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import website_building from "./../../public/images/website-building.jpg";
import illustration from "./../../public/images/services.png";
export const Services: FunctionComponent = () => {
  const services: {
    name: string | ReactNode;
    image: string | StaticImageData;
    description: ReactNode;
  }[] = [
    {
      name: "Professional website construction",
      image: website_building,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ea
      repellendus mollitia corporis consectetur doloremque error in aliquam
      facere! Repellat earum pariatur aspernatur itaque porro illum similique
      beatae omnis modi.`,
    },
  ];
  return (
    <section id="services" className="w-full min-h-screen text-center pb-28">
      <div className="content flex flex-col mx-auto gap-28 lg:w-full xl:w-3/4 2xl:w-2/3 w-full">
        <div className="text flex flex-col mx-auto gap-14">
          <div className="title-sub font-bold text-6xl mt-28">
            Services
            <div className="sub"></div>
          </div>
          <div className="short-text px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            asperiores, alias, facilis necessitatibus dolorum ut deserunt maxime
            culpa dolore delectus commodi maiores id suscipit aliquid doloribus
            voluptatum accusantium dicta est.
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="illustration items-center justify-center w-1/2 hidden md:flex bg-[var(--primary0] overflow-hidden rounded-full">
            <Image
              src={illustration}
              priority={false}
              alt=""
              className=" w-3/4"
            />
          </div>
          <div className="services w-full md:w-1/2 flex gap-4 px-4">
            {services.map((service, key) => (
              <ServiceCard {...service} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
