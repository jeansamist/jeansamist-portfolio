import { cn } from "@/lib/utils";
import Link from "next/link";
import { FunctionComponent } from "react";
export const Topbar: FunctionComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const links = [
    {
      children: "Services",
      href: "/services",
    },
    {
      children: "Work",
      href: "/work",
    },
    {
      children: "Experience",
      href: "/experience",
    },
    {
      children: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="topbar bg-transparent">
      <div className="container flex flex-col md:flex-row md:justify-between md:h-16 gap-4 items-center p-4">
        <Link href={"/"} className="text-2xl font-extrabold">
          <h1>Jeansamist</h1>
        </Link>
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
    </nav>
  );
};
