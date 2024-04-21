import { Metadata } from "@/components/metadata";
import Head from "next/head";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Head>
        <title>BAHA Ephraim (Jeansamist Portfolio)</title>
        <Metadata />
      </Head>
    </main>
  );
}
