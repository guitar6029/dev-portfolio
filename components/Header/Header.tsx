import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="flex flex-row items-center gap-2 p-4 bg-neutral-900">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
            </div>
        </header>
    );
}