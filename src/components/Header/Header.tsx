"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ROUTES = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const pathName = usePathname();

  const isRouteActive = (to: string) => {
    return to === "/" ? pathName === "/" : pathName.startsWith(to);
  };

  return (
    <header className="z-100 sticky top-0">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          {ROUTES.map((route) => {
            const isActive = isRouteActive(route.to);

            return (
              <Link
                key={route.id}
                href={route.to}
                className={`sm:text-xl font-space md:text-4xl p-3 trns ${
                  isActive ? "text-(--blue)" : "hover:bg-(--bg-hover)"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
