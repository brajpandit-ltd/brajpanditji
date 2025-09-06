import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui";
import Link from "next/link";
import Menu from "./Menu";
import staticData from "@/constants/static.json"; // ✅ default import
import TopHeader from "./TopHeader";

const { header } = staticData; // ✅ destructure

const Logo = () => (
  <Image src={header.logo} alt="brajpandit logo" width={135} height={53} />
);

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50">
      <TopHeader />

      <nav className="py-4 px-4 backdrop-blur-md bg-white/80 shadow-base">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between gap-6 text-sm font-medium">
          <Logo />
          <Menu menuItems={header.menuItems || []} wrapperClass="flex-1 justify-center" />
          <Link href="/pandits">
            <Button label="Book Your Pandit Ji" variant="primary" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-between gap-6 text-sm font-medium relative">
          <Logo />
          <Menu
            isMobile
            menuItems={header.menuItems || []}
            wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
