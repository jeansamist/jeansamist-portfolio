import { FunctionComponent } from "react";
import project1 from "@/images/project1.png";
import logo from "@/images/jeansamist_logo_form.svg";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge, badgeVariants } from "./ui/badge";
import Link from "next/link";
export const Works: FunctionComponent = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Card>
      <CardHeader className="">
        <div className="mb-4 relative">
          <Image
            src={project1}
            alt="BAHA Ephraim portfolio"
            className="rounded w-full "
          />
          <div className=" right-4 bottom-0 p-2 rounded-full   overflow-hidden absolute bg-white transform translate-y-[50%]">
            <Image src={logo} alt="Jeansamist logo" className="w-16" />
          </div>
        </div>
        <CardTitle className="text-primary">Jeansamist Portfolio</CardTitle>
        <CardDescription>My personal portfolio</CardDescription>
      </CardHeader>
      <CardFooter className="space-x-2">
        <Link className={badgeVariants()} href={"#"}>
          React
        </Link>
        <Link className={badgeVariants()} href={"#"}>
          Tailwind
        </Link>
      </CardFooter>
    </Card>
  );
};
