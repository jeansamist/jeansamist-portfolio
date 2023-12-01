import { HomeHero } from "@/components/HomeHero";
import { Services } from "@/components/Services";
import { Stacks } from "@/components/Stacks";

export default function Home() {
  return (
    <div className=" xl:text-xl">
      <HomeHero />
      <Services />
      <Stacks />
    </div>
  );
}
