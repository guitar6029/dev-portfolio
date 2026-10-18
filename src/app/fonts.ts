import { Exo_2, Roboto_Condensed } from "next/font/google";

// === Google Subtitle Font (Exo 2) ===
export const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-exo2",
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-hero-display",
});
