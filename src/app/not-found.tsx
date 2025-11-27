import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold text-amber-400">Page Not Found</h1>
      <Link
        href={"/"}
        className="text-2xl p-3 md:w-[15rem] md:text-center rounded-xl bg-amber-50 text-black hover:bg-amber-500 transition duration-300 ease-in"
      >
        Home
      </Link>
      <Link
        href={"/portfolio"}
        className="text-2xl p-3 md:w-[15rem] md:text-center rounded-xl bg-amber-50 text-black hover:bg-amber-500 transition duration-300 ease-in"
      >
        Portfolio
      </Link>
    </div>
  );
}
