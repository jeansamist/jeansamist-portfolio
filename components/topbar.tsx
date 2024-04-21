import Link from "next/link";
import { FunctionComponent } from "react";
import me from "@/images/me.png";
import Image from "next/image";
export type TopbarProps = {};
import { TelephoneIcon, Mail01Icon } from "hugeicons-react";
import { Button } from "./button";
export const Topbar: FunctionComponent<TopbarProps> = () => {
  return (
    <nav className={"border-b border-silver/30 py-4"}>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link
            href="https://jeansamist.vercel.app"
            className="flex items-center gap-4 font-medium"
          >
            <Image
              src={me}
              alt="Logo"
              width={0}
              height={0}
              className="rounded-full w-10 border-4 bg-primary border-white"
            />
            Jeansamist
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <Mail01Icon />
            Contact me
          </Button>
        </div>
      </div>
    </nav>
  );
};
