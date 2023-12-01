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
          </ScrollArea>
        </main>
      </body>
    </html>
  );
}
