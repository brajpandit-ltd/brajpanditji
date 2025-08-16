import React from "react";
import Image from "next/image";
import { Button } from "@/components/common";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4 py-12">
      <div className="max-w-5xl mx-auto rounded-3xl shadow-xl overflow-hidden border border-yellow-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-16">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/about-panditji.jpg"
              alt="Braj Pandit Ji"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg object-cover border-4 border-orange-200 dark:border-yellow-900"
            />
          </div>
          {/* Right: Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 dark:text-yellow-300 mb-4">
              About <span className="text-primary">Braj Pandit Ji</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
              <span className="font-semibold text-orange-700 dark:text-yellow-300">
                Braj Pandit Ji
              </span>{" "}
              is a renowned Vedic scholar and spiritual guide, dedicated to
              bringing the divine wisdom of Sanatan Dharma to every home. With
              decades of experience in performing sacred rituals, kathas, and
              pujas, our mission is to make authentic spiritual services
              accessible to all, both online and offline.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              Our team of verified pandits and scholars ensures that every
              ceremony is performed with utmost devotion and adherence to Vedic
              traditions. Whether you seek blessings for health, wealth,
              relationships, or spiritual growth, we are here to guide you on
              your journey.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Authentic Vedic Pujas & Rituals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Online & In-person Ceremonies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Personalized Guidance & Consultation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Trusted by Thousands of Devotees</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Button
                label="Book a Puja"
                href="/services"
                variant="primary"
                className="px-6"
              />
              <Button
                label="Contact Us"
                href="/contact"
                variant="secondary"
                className="px-6"
              />
            </div>
          </div>
        </div>
        {/* Bottom: Vision/Mission */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-100 dark:from-gray-800 dark:to-gray-900 px-8 py-6 border-t border-yellow-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-orange-700 dark:text-yellow-300 mb-2">
            Our Vision
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            To inspire devotion, spread the light of Vedic knowledge, and make
            every home a temple of peace, prosperity, and spiritual fulfillment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
