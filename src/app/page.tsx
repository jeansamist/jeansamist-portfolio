import { HomeHero } from "@/components/HomeHero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className=" xl:text-xl">
      <HomeHero />
      <Services />
    </div>
  );
}
