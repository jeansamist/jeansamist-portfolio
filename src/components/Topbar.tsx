import { FunctionComponent } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo_text from "@/images/jeansamist_logo.svg";
export const Topbar: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const links = [
    {
      children: "Biography",
      href: "#biography",
    },
    {
      children: "Services",
      href: "#services",
    },
    {
      children: "Skills",
      href: "#skills",
    },
    {
      children: "Work",
      href: "#work",
    },
    {
      children: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className="border-b bg-white">
      <div className="container flex flex-col md:flex-row md:justify-between md:h-16 gap-4 items-center p-4">
        <div className="brand">
          <Image src={logo_text} alt="jeansamist_logo" width={150} />
        </div>
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.children}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.children}
            </Link>
          ))}
        </nav>
        <div className="flex items-center w-full md:w-auto">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-[100px] lg:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};
