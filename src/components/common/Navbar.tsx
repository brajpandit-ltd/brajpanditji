"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
// import { cn } from '../../lib/utils';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Puja Services", href: "/#pujaservices", scrollTo: "pujaservices" },
  { label: "Products", href: "/#products", scrollTo: "products" },
  {
    label: "Verified Pandits",
    href: "/#verifiedPandits",
    scrollTo: "verifiedPandits",
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm
      ${isScrolled ? "bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Braj Pandit"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-orange-600 dark:text-orange-400">
            {t("brajPandit")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium hover:text-orange-600 transition-colors
                ${
                  pathname === href
                    ? "text-orange-600"
                    : "text-gray-700 dark:text-gray-200"
                }`}
            >
              {t(label)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-800 dark:text-white"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1a1a1a] shadow-lg px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={handleLinkClick}
                className="text-base font-medium text-gray-800 dark:text-white"
              >
                {t(label)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
