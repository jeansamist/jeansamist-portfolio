import { ButtonPrimary, ButtonSecondary } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import management from "./../../public/images/management.svg";
export const Services: FunctionComponent = () => {
  const services: { name: string | ReactNode; description: ReactNode }[] = [
    {
      name: "Professional website construction",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ea
      repellendus mollitia corporis consectetur doloremque error in aliquam
      facere! Repellat earum pariatur aspernatur itaque porro illum similique
      beatae omnis modi.`,
    },
    {
      name: "Professional website construction",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ea
      repellendus mollitia corporis consectetur doloremque error in aliquam
      facere! Repellat earum pariatur aspernatur itaque porro illum similique
      beatae omnis modi.`,
    },
    {
      name: (
        <div>
          <Image src={management} alt="management softwares" priority={false} />
          <div className="name">Professional website constructionI</div>
        </div>
      ),
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ea
      repellendus mollitia corporis consectetur doloremque error in aliquam
      facere! Repellat earum pariatur aspernatur itaque porro illum similique
      beatae omnis modi.`,
    },
  ];
  return (
    <section className="w-full h-screen text-center flex justify-center items-center">
      <div className="content flex flex-col gap-40 lg:w-full xl:w-3/4 2xl:w-2/3 w-full">
        <div className="title font-bold text-6xl">Services</div>
        <div className="services flex gap-4">
          {services.map((service, k) => (
            <Card
              title={service.name}
              key={k}
              className="w-1/3"
              footer={
                <div className="flex justify-center gap-4 items-center">
                  <ButtonPrimary>Ask for a quote</ButtonPrimary>
                  <ButtonSecondary>Archievements</ButtonSecondary>
                </div>
              }
            >
              {service.description}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
