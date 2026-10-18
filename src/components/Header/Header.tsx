"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeIndex = NAV_ITEMS.findIndex(
    (item) => item.kind === "route" && isActive(item.href),
  );

  useEffect(() => {
    if (!isMenuOpen) return;

    previousFocusedElementRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    const fallbackMenuButton = menuButtonRef.current;
    const drawer = drawerRef.current;
    const focusableSelector = "a[href], button:not([disabled])";
    const focusableElements =
      drawer?.querySelectorAll<HTMLElement>(focusableSelector);
    const firstFocusableElement = focusableElements?.[0];

    document.body.style.overflow = "hidden";
    firstFocusableElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawer) return;

      const currentFocusableElements =
        drawer.querySelectorAll<HTMLElement>(focusableSelector);
      const firstElement = currentFocusableElements[0];
      const lastElement =
        currentFocusableElements[currentFocusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      (previousFocusedElementRef.current ?? fallbackMenuButton)?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <button
            ref={menuButtonRef}
            className="site-header__menu-button"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Image
              src="/images/decorations/hamburgerMenu.png"
              alt=""
              aria-hidden="true"
              width={1254}
              height={1254}
              className="site-header__menu-image"
            />
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
              ref={drawerRef}
              id="primary-navigation"
              className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""}`}
              aria-label="Primary navigation"
            >
              <button
                className="site-header__drawer-close"
                type="button"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Close</span>
                <span aria-hidden="true">×</span>
              </button>
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

          <button
            className="site-header__mobile-backdrop"
            type="button"
            aria-label="Close navigation menu"
            hidden={!isMenuOpen}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </header>

      <div className="site-side-panels" aria-hidden="true">
        <Image
          src="/images/decorations/sidePanel.png"
          alt=""
          width={724}
          height={2172}
          className="site-side-panels__panel site-side-panels__panel--left"
        />
        <Image
          src="/images/decorations/sidePanel2.png"
          alt=""
          width={724}
          height={2172}
          className="site-side-panels__panel site-side-panels__panel--right"
        />
      </div>
    </>
  );
}
