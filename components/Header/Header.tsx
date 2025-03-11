import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="flex flex-row items-center  bg-neutral-900 border-b-1 border-neutral-500">
                <Link href="/" className="sm:text-xl md:text-2xl p-3 hover:bg-amber-300 hover:text-black transition duration-300 ease-in">Home</Link>
                <Link href="/projects" className="sm:text-xl md:text-2xl p-3 hover:bg-amber-300 hover:text-black transition duration-300 ease-in">Projects</Link>
                <Link href="/about" className="sm:text-xl md:text-2xl p-3 hover:bg-amber-300 hover:text-black transition duration-300 ease-in">About</Link>
            </div>
        </header>
    );
}