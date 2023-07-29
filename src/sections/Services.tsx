import { FunctionComponent } from "react";
import website_development from "./../../public/images/website_development.svg";
import mobile_app_development from "./../../public/images/mobile_app_development.svg";
import api_development from "./../../public/images/api_development.svg";
import custom_features from "./../../public/images/custom_features.svg";
import performance_optimization from "./../../public/images/performance_optimization.svg";
import Service from "@/types/Service";
import { ServicesSlider } from "@/components/ServicesSlider";
import { Line } from "@/components/Line";
export const Services: FunctionComponent = () => {
  const services: Service[] = [
    {
      name: "Development of professional websites",
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
      image: custom_features,
      description: `Creation of specific functionalities adapted to the unique needs of each project`,
    },
    {
      name: "Performance optimization",
      image: performance_optimization,
      description: `Improved performance of websites and applications for faster navigation and an optimized user experience`,
    },
  ];
  return (
    <section
      id="services"
      className="w-full min-h-screen text-center transition-all duration-1000 delay-200 zoom-init"
    >
      <div className="linear-bg bg-main_linear_tb pb-28 backdrop-blur-xl transition-all duration-500 delay-200">
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
          <div className="flex justify-center">
            <div className="services w-full md:w-3/4 px-4">
              <ServicesSlider services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
