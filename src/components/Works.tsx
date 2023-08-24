import { FunctionComponent } from "react";
// import { Card } from "./ui/card";
import project1 from "@/images/project1.png";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
export const Works: FunctionComponent = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="works container py-16">
      <div className="title text-5xl font-extrabold mb-16 text-center">
        WORKS
      </div>
      <div className="grid">
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Image
                src={project1}
                alt="BAHA Ephraim portfolio"
                className="rounded w-full"
              />
            </div>
            <CardTitle className="text-primary">Jeansamist Portfolio</CardTitle>
            <CardDescription>My personal portfolio</CardDescription>
          </CardHeader>
          <CardFooter>{/* <Link ></Link> */}</CardFooter>
        </Card>
      </div>
    </div>
  );
};
