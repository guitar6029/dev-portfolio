import Image from "next/image";
import piniaSrc from "@/assets/svg/pinia.svg";

export default function PiniaIcon(props: { className?: string }) {
  return (
    <Image
      src={piniaSrc}
      alt="Pinia"
      className={props.className}
      width={20}
      height={20}
    />
  );
}
