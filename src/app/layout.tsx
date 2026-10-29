import type { Metadata } from "next";
import "./style/globals.css";
import Header from "../components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import { chakraPetch, exo2, robotoCondensed } from "./fonts";

export const metadata: Metadata = {
  title: "Josh Soll | Product Engineer",
  description: "Josh Soll is a Product Engineer focused on frontend engineering, UI/UX, and full-stack product development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} ${robotoCondensed.variable} ${chakraPetch.variable}`}
      >
        <Header />
        <main className="min-h-screen relative">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
