"use client"
import Link from "next/link";
import { WalletButton } from "../ui/Wallet";


const Navbar = () => {
  const navItems = [
    { id: 1, text: "Home", path: "/a" },
    { id: 2, text: "Stats", path: "/m" },
    { id: 3, text: "Pool", path: "/p" },
  ];

  return (
    <nav className="container mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <Link  className="text-2xl font-normal" href={"/"}>
          Coin Block CLash
        </Link>
        <div className="space-x-9 hidden md:flex ">
          {navItems.map((item) => (
            <Link key={item.id} href={item.path} className="hover:text-gray-600">
              {item.text}
            </Link>
          ))}
        </div>
        <WalletButton/>
      </div>
    </nav>
  );
};

export default Navbar;