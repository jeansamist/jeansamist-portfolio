import { Topbar } from "@/components/Topbar";
import { Balls } from "@/components/balls";
import "@/styles/globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "BAHA Ephraim - Fullstack Developer",
  applicationName: "Jeansamist Portfolio",
  creator: "jeansamist",
  description: "BAHA Ephraim (Jeansamist) portfolio",
  other: {
    "google-site-verification": "P92hAh_5MLeYb0zFXJW_SxRZPzgvyh0oZ0-e5CcxYzc",
  },
};
import Image from "next/image";
import me from "@/images/me.png";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Balls />
        <main className="relative z-10 min-h-screen text-zinc-900">
          <Topbar />
          <ScrollArea className="h-[calc(100vh-103.25px)] md:h-[calc(100vh-65px)] w-full">
            <div className="main max-w-[100vw]">{children}</div>
            <footer className="px-16 py-8 flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <div className="flex gap-4 flex-col items-center text-center md:flex-row md:text-left">
                <div className="w-16 h-16 overflow-hidden rounded-full bg-zinc-800">
                  <Image src={me} className="w-16 h-16 object-cover" alt="me" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-2xl">BAHA Ephraim</h3>
                  <h4 className="font-semibold text-xl">jeansamist</h4>
                </div>
              </div>
              <div className="flex  flex-col items-center gap-8 md:gap-4 md:items-end">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <Link href={"https://www.instagram.com/i.am.ephra"}>
                    <Instagram />
                  </Link>
                  <Link href={"https://twitter.com/jeansamist"}>
                    <Twitter />
                  </Link>
                  <Link href={"https://github.com/jeansamist"}>
                    <Github />
                  </Link>
                </div>
                <span>Jeansamit@gmail.com</span>
              </div>
            </footer>
          </ScrollArea>
        </main>
      </body>
    </html>
  );
}
