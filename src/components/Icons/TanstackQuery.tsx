import Image from "next/image";
import tanstackSrc from "@/assets/svg/tanstack.svg";

export default function PiniaIcon(props: { className?: string }) {
  return (
    <Image
      src={tanstackSrc}
      alt="Tanstack Query"
      className={props.className}
      width={20}
      height={20}
    />
  );
}
