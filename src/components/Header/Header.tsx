"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathName = usePathname()
    return (
        <header>
            <div className="flex flex-row items-center bg-neutral-900 ">
                <Link href="/" className={`sm:text-xl md:text-2xl p-3 hover:text-black transition duration-300 ease-in ${pathName === "/" ? "bg-amber-300 text-black" : "hover:bg-amber-500"}`}>Home</Link>
                <Link href="/projects" className={`sm:text-xl md:text-2xl p-3  hover:text-black transition duration-300 ease-in ${pathName.startsWith("/projects") ? "bg-amber-300 text-black" : "hover:bg-amber-500"}`}>Projects</Link>
                <Link href="/about" className={`sm:text-xl md:text-2xl p-3  hover:text-black transition duration-300 ease-in ${pathName === "/about" ? "bg-amber-300 text-black" : "hover:bg-amber-500"}`}>About</Link>
                
                
            </div>
        </header>
    );
}