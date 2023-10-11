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
      <div className="absolute grid grid-cols-3 grid-rows-3 gap-4">
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-lg"></div>
      </div>
      <div className="absolute grid grid-cols-5 right-4 top-10 grid-rows-3 gap-4">
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-lg"></div>
      </div>
      <div className="absolute grid grid-cols-2 right-4 -bottom-10 grid-rows-6 gap-4">
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
        <div className="w-4 h-4 bg-violet-600 rounded-lg"></div>
      </div>
      <div className="container">
        <div className="mb-8">
          <div className="w-40 h-5 mx-auto mb-8 rounded-xl bg-violet-400"></div>
          <div className="title text-5xl font-extrabold mb-8 text-center text-violet-900">
            Services
          </div>
          <p className="text-center lg:text-2xl">
            I&apos;am offering a large variety of services as a developer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[calc(75%-300px-1rem)]">
            <div className="p-4">
              <h3 className="text-lg lg:text-2xl font-bold">
                {services[0].title}
              </h3>
              <p className="text-base lg:text-lg">{services[0].description}</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg lg:text-2xl font-bold">
                {services[1].title}
              </h3>
              <p className="text-base lg:text-lg">{services[1].description}</p>
            </div>
          </div>
          <Image src={service} alt="" className="hidden lg:block w-[300px]" />
          <div className="lg:w-[calc(75%-300px-1rem)]  lg:text-right ">
            <div className="p-4">
              <h3 className="text-lg lg:text-2xl font-bold">
                {services[2].title}
              </h3>
              <p className="text-base lg:text-lg">{services[2].description}</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg lg:text-2xl font-bold">
                {services[3].title}
              </h3>
              <p className="text-base lg:text-lg">{services[3].description}</p>
            </div>
          </div>
        </div>
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
