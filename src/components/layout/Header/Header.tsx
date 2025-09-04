import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui";
import Menu from "./Menu";
import { header } from "@/constants/static.json";
import TopHeader from "./TopHeader"; // Import TopHeader

const Logo = () => (
  <Image src={header.logo} alt="brajpandit logo" width={135} height={53} />
);

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50">
      {/* Top Header */}
      <TopHeader />

      {/* Main Navigation */}
      <nav className="py-4 px-4 backdrop-blur-md bg-white/80 shadow-base">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between gap-6 text-sm font-medium">
          <Logo />

          <Menu
            menuItems={header.menuItems || []}
            wrapperClass="flex-1 justify-center"
          />

          <Button variant="primary" label="Book Your Panditji" />
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-between gap-6 text-sm font-medium relative">
          <Logo />

          <Menu
            isMobile={true}
            menuItems={header.menuItems || []}
            wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
