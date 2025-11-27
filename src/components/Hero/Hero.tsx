import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative h-fit flex flex-col items-center justify-center animate-slide-in-right transiiton duration-400 ease-in">
      <div className="w-fit p-4 mt-5 flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hey, I&apos;m <span className="bg-animate opacity-0">Josh</span></h1>
        <div>
          <p className="text-2xl md:text-2xl">
            I build web apps that bring ideas to life.
          </p>
          <p className="text-2xl md:text-2xl">
            Let&apos;s create something amazing together!
          </p>
        </div>
        <Link
          className="group flex flex-row items-center justify-center gap-2  text-black w-[100%] mt-5 md:w-[15rem] font-bold text-center rounded-xl p-3 bg-amber-50 hover:bg-amber-500 transition duration-300 ease-in"
          href={"/portfolio"}
        >
          <span className="group-hover:underline">Portfolio</span>
          
        </Link>
      </div>
    </div>
  );
}
