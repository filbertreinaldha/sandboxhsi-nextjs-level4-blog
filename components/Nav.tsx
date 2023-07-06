"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "@/assets/logo.svg";

const Nav = ({ hideButtons = false, white = false }) => {
  const router = useRouter();
  const queryString = useSearchParams();
  const sort = queryString?.get("sort") || "new";

  return (
    <header
      className={`relative grid grid-cols-3 justify-between pt-8 pb-16 ${
        white ? "bg-white" : ""
      }`}
    >
      <div
        className={`flex-row gap-x-3 sm:gap-x-6 font-semibold col-start-1 ${
          hideButtons ? "hidden" : "flex"
        }`}
      >
        <button
          onClick={() => router.push("?sort=popular")}
          className={`${
            sort == "popular"
              ? "text-white bg-watermelon rounded-lg px-4 py-1 focus:outline-watermelon-dark"
              : "px-4 py-1"
          }`}
        >
          Popular
        </button>
        <button
          onClick={() => router.push("?sort=new")}
          className={`${
            sort == "new"
              ? "text-white bg-watermelon rounded-lg px-4 py-1 focus:outline-watermelon-dark"
              : "px-4 py-1"
          }`}
        >
          New
        </button>
      </div>
      <div className="col-start-2 text-center justify-center">
        <Link href="/">
          <Image src={Logo} className="inline-block" alt="Logo" />
        </Link>
      </div>
      <div className={`${hideButtons ? "hidden" : "flex"} col-start-3`}></div>
    </header>
  );
};

export default Nav;
