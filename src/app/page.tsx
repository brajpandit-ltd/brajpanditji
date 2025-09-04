"use client";
//src/app/page.tsx
import { Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import {ServiceSection} from "@/components/ServiceCard/ServiceSection";

// import vedicSection from "@/components/vedicSection";

import VerifiedPanditsSection from "@/components/PanditCard/VerifiedPandits";

import CustomerTestimonials from "@/components/customer/customer";

import LatestArticles from "@/components/latestArticals/latestArticals";

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
            <Link href="/pandits">
        <Button label="Book Your Pandit Ji" variant="primary" />
      </Link>

      {/* Button to /services */}
      <Link href="/services">
        <Button label="See All Pooja Services" variant="default" />
      </Link>
          </div>
        </div>
      </section>

      {/* category section scroller */}

      <section className="flex justify-center ">
        <div className=" shadow-lg overflow-hidden">
          <Image
            src="/assets/category.png"
            alt="Categories"
            width={1500}
            height={382}
            className="object-cover"
            priority
          />
        </div>
      </section>

      

      {/* Premium Services Section */}
      <ServiceSection />




      {/* About Vedic Section */}

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
                We take care of everything – from samagri to setup. You only
                focus on devotion while we handle all the details seamlessly.
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
                Every ritual is conducted with proper Vedic chanting,
                maintaining sanctity, discipline, and devotion at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Our Verified Panditji Section */}

      <VerifiedPanditsSection />

      {/* Testimonial Section */}

      <CustomerTestimonials />

      {/* Horoscope Section */}

      {/* Blogs Section */}
      <LatestArticles />
    </div>
  );
}
