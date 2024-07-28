import type { Metadata } from "next";
import "@/styles/css/globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
