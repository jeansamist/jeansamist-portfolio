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
    <div className="bg-transparent">
      <div className="container flex flex-col md:flex-row md:justify-between md:h-16 gap-4 items-center p-4">
        <div className="text-2xl font-extrabold">Jeansamist</div>
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.children}
              className="text-sm font-medium text-zinc-950 text-muted-foreground transition-colors hover:text-zinc-600"
            >
              {link.children}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
