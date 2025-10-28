"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import ThemeToggler from "../ThemeToggler";

export default function Header() {
  const pathName = usePathname();
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-neutral-900 ">
        <div className="flex flex-row items-center gap-2">
          <Link
            href="/"
            className={`sm:text-xl md:text-2xl p-3 hover:text-black transition duration-300 ease-in ${
              pathName === "/"
                ? "bg-amber-300 text-black"
                : "hover:bg-amber-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`sm:text-xl md:text-2xl p-3  hover:text-black transition duration-300 ease-in ${
              pathName.startsWith("/projects")
                ? "bg-amber-300 text-black"
                : "hover:bg-amber-500"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`sm:text-xl md:text-2xl p-3  hover:text-black transition duration-300 ease-in ${
              pathName === "/about"
                ? "bg-amber-300 text-black"
                : "hover:bg-amber-500"
            }`}
          >
            About
          </Link>
        </div>
        {/* <ThemeToggler /> */}
      </div>
    </header>
  );
}
