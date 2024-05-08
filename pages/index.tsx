import { HomeHeader } from "@/components/home-header";
import { Metadata } from "@/components/metadata";
import Head from "next/head";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>BAHA Ephraim (Jeansamist Portfolio)</title>
        <Metadata />
      </Head>
      <HomeHeader />
    </main>
  );
}
