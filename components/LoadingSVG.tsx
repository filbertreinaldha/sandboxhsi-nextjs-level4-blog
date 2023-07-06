import Image from "next/image";
import Loading from "@/assets/loading.svg";

export default function LoadingSVG() {
  return (
    <Image
      priority
      src={Loading}
      width={50}
      height={50}
      alt="Loading"
      className="invert-[24%] sepia-[11%] saturate-[341%] hue-rotate-[201deg] brightness-95 contrast-[96%] animate-pulse"
    />
  );
}
