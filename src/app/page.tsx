import { Experience } from "@/components/Experience";
import { HomeHero } from "@/components/HomeHero";
import { Services } from "@/components/Services";
import { Stacks } from "@/components/Stacks";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <div className=" xl:text-xl">
      <HomeHero />
      <Services />
      <Works />
      <Experience />
      <Stacks />
    </div>
  );
}
