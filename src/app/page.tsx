// app/page.tsx

import { Button } from "@/components/common";
import Image from "next/image";
import {
  HomeProducts,
  LiveBhajans,
  PujaServices,
  VerifiedPanditJis,
} from "@/components/layout/home";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 px-4 md:px-12">
      {/* Hero Section (Static - No hooks/events) */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 md:py-40">
        <Image
          src="/assets/home-hero-light.jpg"
          alt="Braj Pandit Home Hero"
          fill
          priority
          loading="eager"
          className="cover-image -z-1"
        />

        <div className="relative z-10 mx-4 md:max-w-[900px] md:mx-auto">
          <h4 className="text-sm md:text-base font-normal text-white">
            Welcome to Braj Pandit
          </h4>
          <h1 className="text-2xl md:text-6xl font-bold text-white">
            Your <span className="text-primary">Trusted</span> Platform for
            Sacred <span className="text-secondary">Hindu Ceremonies</span>
          </h1>

          <p className="text-base md:text-xl font-medium mt-3 md:mt-6 text-white">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>

          <div className="flex items-center justify-center flex-col md:flex-row mt-8 gap-6 md:gap-14">
            <Button label="Book Your Pandit Ji" variant="primary" />
            <Button label="See All Pooja Services" variant="default" />
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      <LiveBhajans />
      <HomeProducts />
      <PujaServices />

      <VerifiedPanditJis />
    </div>
  );
}
