// "use client";
import api_development from "@/images/api_development.svg";
import custom_features from "@/images/custom_features.svg";
import mobile_app_development from "@/images/mobile_app_development.svg";
import performance_optimization from "@/images/performance_optimization.svg";
import website_development from "@/images/website_development.svg";
import service from "@/images/service.svg";
import { Service } from "@/types/Service";
import { FunctionComponent } from "react";
// import { Carousel } from "./Carousel";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
export const Services: FunctionComponent = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const services: Service[] = [
    {
      title: "Websites Development",
      shortDescription: "Websites, from simple landing pages to complex sites.",
      image: website_development,
      description: `Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience.`,
    },
    {
      title: "Mobile Development",
      shortDescription: `Mobile applications for iOS and Android platforms.`,
      image: mobile_app_development,
      description: `Design and creation of mobile applications for iOS and Android platforms, providing usability and advanced functionality`,
    },
    {
      title: "APIs Development",
      shortDescription: `Creation of APIs to enable communication between different applications`,
      image: api_development,
      description: `Creation of application programming interfaces (APIs) to enable communication between different applications and services.`,
    },
    {
      title: "Performance optimization",
      shortDescription: `Optimization of websites and applications`,
      image: performance_optimization,
      description: `Improved performance of websites and applications for faster navigation and an optimized user experience`,
    },
  ];
  return (
    <div className="services py-16 relative" {...props}>
      <div className="container">
        <div className="mb-8">
          <div className="w-40 h-5 mx-auto mb-8 rounded-xl bg-zinc-400"></div>
          <div className="title text-5xl font-extrabold mb-8 text-center text-zinc-900">
            Services
          </div>
          <p className="text-center lg:text-2xl">
            I&apos;am offering a large variety of services as a developer
          </p>
        </div>
        <div className=""></div>
      </div>

      {/* {window.innerWidth > 1268 ? (
        <Carousel slidesVisibles={3} slidesToScrool={1}>
          {services.map((service) => (
            <div className="px-4" key={service.title}>
              <ServiceCard {...service} />
            </div>
          ))}
        </Carousel>
      ) : ( */}
      {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div> */}
      {/* )} */}
    </div>
  );
};
