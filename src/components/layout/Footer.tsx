"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ logo }: { logo: string }) => (
  <Link href="/" className="flex items-center">
    <Image src={logo} alt="brajpandit logo" width={135} height={53} />
  </Link>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-[#3b0d0d] to-[#1F1B1B] text-white py-12 px-6 mt-20 dark:from-[#1a1a1a] dark:to-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <Logo logo="/braj-pandit-logo.svg" />
          <p className="text-gray-300 dark:text-gray-400 leading-relaxed text-justify">
            Welcome to Braj pandit – your trusted source for online puja
            services, astrology consultations, prasad delivery, and spiritual
            essentials like Rudraksha, Shaligrams, and Yantras.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services/e-puja"
                className="hover:text-yellow-300 transition"
              >
                E Pujas
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-yellow-300 transition">
                Vedic Gyan
              </Link>
            </li>
            <li>
              <Link
                href="/booking"
                className="hover:text-yellow-300 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            {t("footer.contact")}
          </h3>
          <ul className="space-y-1 text-gray-300 dark:text-gray-400">
            <li>
              <a href="tel:+918595009640">📞 +91 8595009640</a>
            </li>
            <li>
              <a href="tel:+918595009640">📞 +91 8595009640</a>
            </li>
            <li>
              <a href="mailto:brajpandit123@gmail.com ">
                📧 brajpandit123@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            {t("footer.follow_us")}
          </h3>
          <div className="flex flex-col gap-3">
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Image
                src="https://res.cloudinary.com/djtq2eywl/image/upload/v1751794911/facebook-circle-logo-blue-70175169479332995fhjt438m_aqi7dg.png"
                alt="Facebook"
                width={20}
                height={20}
              />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/vedagyanam_official?igsh=ODkyNHhmczZiYnhh"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Image
                src="https://res.cloudinary.com/djtq2eywl/image/upload/v1751794910/instagram-logo_971166-164497_yfnzdl.avif"
                alt="Instagram"
                width={20}
                height={20}
              />
              Instagram
            </Link>
            <Link
              href="https://youtube.com/@vedagyanam?si=587Ev8d_yQzUOVE4"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Image
                src="https://res.cloudinary.com/djtq2eywl/image/upload/v1751794910/png-clipart-youtube-logo-youtube-red-logo-sunny-leone-angle-rectangle-thumbnail_lgwxiu.png"
                alt="YouTube"
                width={20}
                height={20}
              />
              YouTube
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-400 dark:text-gray-500 text-sm">
        © {new Date().getFullYear()} BrajPandit. All rights reserved.
      </div>

      {/* Legal Warning */}
      <div className="text-center text-xs text-red-300 dark:text-red-400 mt-2 italic">
        ⚠️ Unauthorized copying or reuse of this code or design is strictly
        prohibited. Legal action may be taken against violators.
      </div>
    </footer>
  );
};

export default Footer;
