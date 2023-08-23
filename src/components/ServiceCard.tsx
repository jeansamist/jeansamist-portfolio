import { FunctionComponent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Service } from "@/types/Service";

export const ServiceCard: FunctionComponent<Service> = ({
  title,
  shortDescription,
  description,
  image,
  ...props
}: React.HTMLAttributes<HTMLElement> & Service) => {
  return (
    <div>
      <Card className="text-center" {...props}>
        <CardHeader>
          <Image src={image} alt={title} className="mb-4 h-48" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{shortDescription}</CardDescription>
        </CardHeader>
        <CardContent className="">
          {/* Description of the service */}
          {description}
        </CardContent>
        <CardFooter>
          <Button className="w-full">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
