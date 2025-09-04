"use client";

import React from "react";
import Image from "next/image";

export default function vedicSection() {
  return (
    <section className="px-4 md:px-10 py-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Side Text */}
        <div className="space-y-8 text-right">
          <div>
            <h3 className="text-xl font-semibold text-orange-700">
              Authentic & Verified Pandits
            </h3>
            <p className="text-gray-700 text-sm">
              Our expert and verified Pandits follow Vedic traditions with
              precision, ensuring your rituals are performed authentically and
              bring divine blessings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700">
              Complete Pooja Arrangements
            </h3>
            <p className="text-gray-700 text-sm">
              We take care of everything – from samagri to setup. You only focus
              on devotion while we handle all the details seamlessly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700">
              Hassle-Free Online Booking
            </h3>
            <p className="text-gray-700 text-sm">
              Easily book a Pandit Ji from the comfort of your home with our
              smooth, quick, and transparent process.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/shivji.png"
            alt="Lord Shiva"
            width={400}
            height={400}
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-orange-700">
              Customized Rituals for Every Occasion
            </h3>
            <p className="text-gray-700 text-sm">
              From Griha Pravesh to Wedding Ceremonies, we offer personalized
              pooja services based on traditions, region, and your required
              customs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700">
              Auspicious Muhurat & Guidance
            </h3>
            <p className="text-gray-700 text-sm">
              Our experts help you choose the best muhurat, ensuring maximum
              divine benefit and harmony in your rituals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700">
              Performed with Purity & Devotion
            </h3>
            <p className="text-gray-700 text-sm">
              Every ritual is conducted with proper Vedic chanting, maintaining
              sanctity, discipline, and devotion at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
