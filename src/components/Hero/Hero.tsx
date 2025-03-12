import Link from "next/link";
import { CornerDownLeft } from "lucide-react";
export default function Hero() {
  return (
    <div className="h-fit mt-5 p-4 flex flex-col animate-slide-in-right transiiton duration-400 ease-in">
      <div className="w-fit p-4 flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hey, I&apos;m Josh</h1>
        <div>
          <p className="text-2xl md:text-2xl">
            I build web apps that bring ideas to life.
          </p>
          <p className="text-2xl md:text-2xl">
            Let&apos;s create something amazing together!
          </p>
        </div>
        <Link
          className="flex flex-row items-center justify-center gap-2  text-black w-[100%] mt-5 md:w-[15rem] font-bold text-center rounded-xl p-3 bg-amber-50 hover:bg-amber-500 transition duration-300 ease-in"
          href={"/projects"}
        >
          <span>My projects</span>
          <CornerDownLeft size={24} />
        </Link>
      </div>
    </div>
  );
}
