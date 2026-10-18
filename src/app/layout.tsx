import type { Metadata } from "next";
import "./style/globals.css";
import Header from "../components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import { chakraPetch, exo2, robotoCondensed } from "./fonts";

export const metadata: Metadata = {
  title: "Josh Soll Portfolio",
  description: "A portfolio site for Josh Soll",
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
