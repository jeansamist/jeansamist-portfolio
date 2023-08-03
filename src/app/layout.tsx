import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "BAHA Ephraim - Fullstack Developer",
  applicationName: "Jeansamits Portfolio",
  creator: "jeansamist",
  description: "BAHA Ephraim (Jeansamist) portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-main text-main"}>{children}</body>
    </html>
  );
}
