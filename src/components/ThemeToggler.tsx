"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-2">
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          {/* <Sun className="w-6 h-6 cursor-pointer transition duration-300 ease-in hover:text-amber-500" /> */}
        </button>
      )}
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          {/* <Moon className="w-6 h-6 cursor-pointer transition duration-300 ease-in hover:text-amber-500" /> */}
        </button>
      )}
    </div>
  );
}
