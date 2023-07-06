import Head from "next/head";
import Nav from "@/components/Nav";
import Image from "next/image";
import LoadingSVG from "@/components/LoadingSVG";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Home - Sandbox HSI Level 4 - Blog</title>
      </Head>
      <Nav hideButtons white />
      <div className="flex flex-col py-8 items-center">
        <LoadingSVG />
      </div>
    </>
  );
}
