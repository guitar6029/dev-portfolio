export default function Hero() {
  return (
    <div className="h-fit mt-5 flex flex-col items-center justify-center animate-slide-in-right transiiton duration-400 ease-in">
      {/* onMouseLeave={() => setBgColor(null)} */}
      <div className="rounded-full sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[30rem] flex flex-col items-center justify-center p-2 border-4 border-amber-500">
        <h1 className=" sm:text-xl md:text-6xl font-bold ">
          Hello, I&apos;m Josh
        </h1>
      </div>
    </div>
  );
}
