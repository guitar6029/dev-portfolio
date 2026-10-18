"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home", kind: "route" },
  { href: "/portfolio", label: "Work", kind: "route" },
  { href: "/", label: "About", kind: "route" },
  { href: "#", label: "Résumé", kind: "unavailable" },
  {
    href: "https://www.linkedin.com/in/joshsoll/",
    label: "Contact",
    kind: "external",
  },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeIndex = NAV_ITEMS.findIndex(
    (item) => item.kind === "route" && isActive(item.href),
  );

  return (
    <header className="site-header">
      <div className="site-header__inner">

        <button
          className="site-header__menu-button"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className="site-header__menu-icon">
            {isMenuOpen ? "−" : "+"}
          </span>
        </button>

        <div className="site-header__experiment">
          <Image
            src="/images/decorations/hudPanel.png"
            alt=""
            aria-hidden="true"
            width={2172}
            height={724}
            priority
            className="site-header__experiment-art"
          />
          <nav
            id="primary-navigation"
            className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""}`}
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item, index) => {
              const active = item.kind === "route" && index === activeIndex;

              if (item.kind === "unavailable") {
                return (
                  <span
                    key={item.label}
                    className="site-header__link site-header__link--disabled"
                    aria-disabled="true"
                    title="Résumé destination is not configured"
                  >
                    {item.label}
                  </span>
                );
              }

              const linkProps =
                item.kind === "external"
                  ? { target: "_blank", rel: "noreferrer" }
                  : {};

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`site-header__link ${active ? "site-header__link--active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  {...linkProps}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
