import { ServiceCard } from "@/components/Cards";
import { FunctionComponent, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import website_development from "./../../public/images/website_development.svg";
import mobile_app_development from "./../../public/images/mobile_app_development.svg";
import api_development from "./../../public/images/api_development.svg";
import features from "./../../public/images/features.jpg";
import performanceImg from "./../../public/images/performance.jpg";
import illustration from "./../../public/images/services.svg";
import { Carousel } from "@/components/Carousel";
import Service from "@/types/Service";
import { ServicesSlider } from "@/components/ServicesSlider";
import { Line } from "@/components/Line";
export const Services: FunctionComponent = () => {
  const services: Service[] = [
    {
      name: "https://watapp-kov2iftff-jeansamist-gmailcom.vercel.app/watapp/dashboard/x0OrFc0WcjSzOfOpj2Jf6cjMrUWnyZ Development of professional websites",
      image: website_development,
      description: `Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience.`,
    },
    {
      name: "Mobile application development",
      image: mobile_app_development,
      description: `Design and creation of mobile applications for iOS and Android platforms, providing usability and advanced functionality`,
    },
    {
      name: "API development",
      image: api_development,
      description: `Creation of application programming interfaces (APIs) to enable communication between different applications and services.`,
    },
    {
      name: "Development of custom features",
      image: features,
      description: `Creation of specific functionalities adapted to the unique needs of each project`,
    },
    {
      name: "Performance optimization",
      image: performanceImg,
      description: `Improved performance of websites and applications for faster navigation and an optimized user experience`,
    },
  ];
  return (
    <section
      id="services"
      className="w-full min-h-screen text-center transition-all duration-1000 zoom-init"
    >
      <div className="linear-bg bg-slate-100 pb-28 backdrop-blur-xl transition-all duration-500 delay-200">
        <div className="content flex flex-col mx-auto gap-28 lg:w-full xl:w-3/4 2xl:w-2/3 w-full">
          <div className="text flex flex-col mx-auto gap-14">
            <div className="title-sub font-bold text-6xl mt-28">
              SERVICES
              <Line />
            </div>
            <div className="short-text px-8">
              Do you have digital projects that require the expertise of a
              freelance fullstack developer? I&apos;m here for you ! With
              technical versatility and a passion for innovation, I turn your
              ideas into reality. Together, let&apos;s create tailor-made web
              and mobile solutions, adapted to your needs and ready to exceed
              your expectations. I therefore offer you several of my services
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="illustration items-center justify-center w-1/2 hidden md:flex max-w-[495px]">
              <Image
                src={illustration}
                priority={true}
                alt=""
                className=" w-3/4"
              />
            </div>
            <div className="services w-full md:w-1/2 flex gap-4 px-4">
              <ServicesSlider services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
