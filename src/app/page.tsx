import { HomeHero } from "@/components/HomeHero";
import { Topbar } from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div>
      <HomeHero />
    </div>
  );
}
