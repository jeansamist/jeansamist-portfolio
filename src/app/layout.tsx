import { Topbar } from "@/components/Topbar";
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
      <body className="bg-main text-main">
        <Topbar />
        <ScrollArea className="h-[calc(100vh-65px)] w-full rounded-md">
          <div className="main">{children}</div>
        </ScrollArea>
      </body>
    </html>
  );
}
