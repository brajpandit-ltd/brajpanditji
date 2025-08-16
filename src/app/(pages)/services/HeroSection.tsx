import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      <Image
        src="/assets/services-hero.jpg"
        alt="Braj Pandit services hero"
        fill
        priority
        loading="eager"
        className="object-cover -z-1"
      />

      <div className="max-w-[350px] md:max-w-[650px] px-8">
        <h4 className="text-sm md:text-base font-normal">
          Bring Poojas From Brajdham
        </h4>
        <h1 className="text-2xl md:text-5xl font-bold">
          <span className="text-primary">Sacred</span> Services for Your{" "}
          <span className="text-secondary">Spiritual Journey</span>
        </h1>
        <p className="text-sm md:text-xl font-medium mt-3 md:mt-6">
          Experience the Power of Vedic Rituals, Anytime, Anywhere. Book Expert
          Pandits for Your Sacred Ceremonies!
        </p>
        <p className="mt-4">Scroll Down🔻</p>
      </div>
    </section>
  );
};

export default HeroSection;
