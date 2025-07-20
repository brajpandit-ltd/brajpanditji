


'use client';

import React, { useState } from 'react';
import { Button } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { header } from '@/constants/static.json';

const Logo = () => (
  <Link href="/" className="flex items-center gap-5">
    <Image
      src={header.logo}
      alt="brajpandit logo"
      width={80}
      height={60}
      className="w-30 h-20"
    />
    
  </Link>
);

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm bg-white/90 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {header.menuItems.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-colors"
            >
              {t(label)}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          variant="secondary"
          label="Book Your Panditji"
          size="small"
          className="hidden md:block"
        />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-800 dark:text-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer (always mounted to prevent hook mismatches) */}
      <div
        className={`md:hidden transition-all duration-200 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-[#1a1a1a] shadow-md px-4`}
      >
        <nav className="flex flex-col gap-4 py-4">
          {header.menuItems.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-800 dark:text-white"
            >
              {t(label)}
            </Link>
          ))}
          <Button
            variant="secondary"
            label="Book Your Panditji"
            size="small"
            className="mt-2"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;














// import Image from "next/image";
// import React from "react";
// import { Button } from "@/components/common";
// import Menu from "./Menu";
// import { header } from "@/constants/static.json";

// const Logo = () => (
//   <Image src={header.logo} alt="brajpandit logo" width={135} height={53} />
// );

// const Header = () => {
//   return (
//     <header className="sticky top-0 w-full py-4 px-4 z-9999 backdrop-blur-md bg-white/80 shadow-base">
//       <nav className="hidden items-center justify-between gap-6 text-sm font-medium md:flex">
//         <Logo />

//         <Menu
//           menuItems={header.menuItems || []}
//           wrapperClass="flex-1 justify-center"
//         />

//         <Button variant="secondary" label="Book Your Panditji" size="small" />
//       </nav>

//       <nav className="flex items-center justify-between gap-6 text-sm font-medium md:hidden">
//         <Logo />

//         <Menu
//           isMobile={true}
//           menuItems={header.menuItems || []}
//           wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
//         />
//       </nav>
//     </header>
//   );
// };

// export default Header;










