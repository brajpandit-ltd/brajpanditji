import { Button } from "@/components/common";
import Image from "next/image";

// no hooks and NO on click events in this file

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 md:py-40">
        <Image
          src="/assets/home-hero-light.jpg"
          alt="Hero Image"
          fill
          priority
          loading="eager"
          style={{ objectFit: "cover", zIndex: -1 }}
        />

        <div className="mx-4 md:max-w-[900] md:mx-auto">
          <h4 className="text-sm md:text-base font-normal">
            Welcome to Braj Pandit
          </h4>
          <h1 className="text-2xl md:text-6xl font-bold">
            Your <span className="text-primary">Trusted</span> Platform for
            Sacred <span className="text-secondary">Hindu Ceremonies</span>
          </h1>

          <p className="text-base md:text-xl font-medium mt-3 md:mt-6">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>

          <div className="flex items-center justify-center flex-col md:flex-row mt-8 gap-6 md:gap-14">
            <Button label="Book Your Pandit Ji" variant="primary" />
            <Button label="See All Pooja Services" variant="default" />
          </div>
        </div>
      </section>

      {/* category section scroller */}

      {/* Our Premium Services Section */}

      {/* About Vedic Section */}

      {/* Our Verified Panditji Section */}

      {/* Testimonial Section */}

      {/* Horoscope Section */}

      {/* Blogs Section */}
    </div>
  );
}
