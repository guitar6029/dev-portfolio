import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import { spaceJaeger, exo2 } from "./fonts";

export const metadata: Metadata = {
  title: "Josh Soll Dev Portfolio",
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
        className={`${spaceJaeger.variable} ${exo2.variable}`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
