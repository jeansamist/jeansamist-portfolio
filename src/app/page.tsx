// import Image from "next/image";
import { Topbar } from "@/components/Topbar";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Topbar />
      <Hero />
      <Services />
      <Experience />
    </main>
  );
}
