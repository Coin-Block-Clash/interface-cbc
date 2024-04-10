import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/components/Wallet/WagmiProvider";
import { Toaster } from "@/components/ui/sonner";

const sourceCodeP = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coin Block Clash",
  description: "Bet on your skills",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={sourceCodeP.className}>
        <Web3Provider>{children}</Web3Provider>
        <Toaster />
        </body>
    </html>
  );
}
