"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui";
import Link from "next/link";

interface MenuItem {
  label: string;
  link: string;
  subMenu?: MenuItem[];
}

interface MenuProps {
  wrapperClass?: string;
  isMobile?: boolean;
  menuItems?: MenuItem[];
}

const Menu = ({ wrapperClass = "", isMobile = false, menuItems = [] }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && (
        <Button
          variant="default"
          label=""
          size="large"
          className="border-none rounded-full !p-4"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <span className="block w-6 h-[2px] bg-gray-800 mb-1"></span>
          <span className="block w-6 h-[2px] bg-gray-800 mb-1"></span>
          <span className="block w-6 h-[2px] bg-gray-800"></span>
        </Button>
      )}

      {/* Menu Items */}
      <ul
        className={`items-center gap-5 text-base font-normal transition-all ${
          wrapperClass
        } ${isMobile ? (isOpen ? "flex flex-col" : "hidden") : "flex"}`}
      >
        {/* Mobile Close Button */}
        {isMobile && isOpen && (
          <li className="self-end mb-4">
            <Button
              variant="default"
              label="X"
              size="large"
              className="border-none rounded-full !p-4"
              onClick={toggleMenu}
            />
          </li>
        )}

        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary transition-colors"
            onClick={() => isMobile && setIsOpen(false)} // close after click (mobile UX)
          >
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
