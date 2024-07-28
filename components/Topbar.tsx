"use client";
import { useState } from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import me96 from "@/images/me96.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
export const Topbar: FunctionComponent = () => {
  type TopbarLink = {
    href?: string;
    label: string;
  };
  const [activeIndex, setactiveIndex] = useState<number>(0);
  const [links, setlinks] = useState<TopbarLink[]>([
    {
      label: "About",
    },
    {
      label: "Stack",
    },
    { label: "Aptitudes" },
    { label: "Projects" },
    { label: "Contact" },
  ]);
  return (
    <nav className={"h-auto py-4 md:h-24 fixed top-0 left-0 w-full"}>
      <div className="container flex flex-col gap-4 md:flex-row h-full justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={me96} alt="Jeansamist logo" className="w-12" />
          <Link href={"/"} className="font-bold text-title text-xl">
            Jeansamist
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {links.map((link, key) => (
            <Link
              href={link.href || "#" + link.label.toLowerCase()}
              key={key}
              className={cn(
                "text-muted hover:text-title transition-colors",
                activeIndex === key && "text-title font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
