
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Providers } from "@/utils/provider/walletProvider";




const JetBrain = JetBrains_Mono({ 
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Coin Block Clash",
  description: "Bet On Your Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrain.className}> 
      <Providers>
         <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
