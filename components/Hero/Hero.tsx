"use client";
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center animate-slide-in-right transiiton duration-400 ease-in">
      {/* onMouseLeave={() => setBgColor(null)} */}
      <div className="rounded-full w-[30rem] h-[30rem] flex flex-col items-center justify-center p-2 border-4 border-amber-500">
        <h1 className="text-6xl font-bold ">Hello, I&apos;m Josh</h1>
        <p className="text-2xl font-bold">Full Stack Developer</p>
      </div>
    </div>
  );
}
