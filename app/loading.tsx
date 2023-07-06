import Nav from "@/components/Nav";
import LoadingSVG from "@/components/LoadingSVG";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sandbox HSI Next.js Level 4 - Blog",
};

export default function Loading() {
  return (
    <>
      <Nav />
      <div className="flex flex-col py-8 items-center">
        <LoadingSVG />
      </div>
    </>
  );
}
