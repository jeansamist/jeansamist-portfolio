"use client";
import { FunctionComponent, useEffect, useState, MouseEvent } from "react";
import { ServiceCard } from "./Cards";
import { Carousel } from "./Carousel";
import Service from "@/types/Service";

export const ServicesSlider: FunctionComponent<{ services: Service[] }> = ({
  services,
}) => {
  const [activeServiceSlide, setactiveServiceSlide] = useState<Service>(
    services[0]
  );
  useEffect(() => {
    const sericesDOM = document.querySelector<HTMLDivElement>("#services");
    console.log(sericesDOM);

    if (sericesDOM) {
      sericesDOM.style.background = `url('${activeServiceSlide.image.src}') no-repeat center`;
    }
  }, [activeServiceSlide]);

  function onSlide(index: number) {
    setactiveServiceSlide(services[index]);
  }
  function onMouseEnter() {
    const linearBackgroundElement =
      document.querySelector<HTMLDivElement>(".linear-bg");
    const sericesDOM = document.querySelector<HTMLDivElement>("#services");
    linearBackgroundElement?.classList.add("bg-opacity-50");
    sericesDOM?.classList.add("zoom");
  }
  function onMouseLeave() {
    const linearBackgroundElement =
      document.querySelector<HTMLDivElement>(".linear-bg");
    const sericesDOM = document.querySelector<HTMLDivElement>("#services");
    linearBackgroundElement?.classList.remove("bg-opacity-50");
    sericesDOM?.classList.remove("zoom");
  }
  return (
    <Carousel onSlide={onSlide}>
      {services.map((service, key) => (
        <div className="flex justify-center items-center" key={key}>
          <ServiceCard
            {...service}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      ))}
    </Carousel>
  );
};
