import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodeP = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coin Block Clash",
  description: "Bet on your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceCodeP.className}>{children}</body>
    </html>
  );
}
