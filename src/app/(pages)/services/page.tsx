"use client";

import { AllServices } from "@/components/ServiceCard/AllServices";
import CustomerTestimonials from "@/components/customer/customer";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  // Array for services
  const services = [
    {
      img: "Group 28.png",
      title: "Horoscope & Kundli Readings",
      link: "/services/horoscope",
    },
    {
      img: "Group 29.png",
      title: "Career, Business & Finance Astrology",
      link: "/services/career-finance",
    },
    {
      img: "Group 30.png",
      title: "Love, Marriage & Relationship Astrology",
      link: "/services/marriage",
    },
    {
      img: "Group 31.png",
      title: "Graha Dosha Remedies & Vedic Solutions",
      link: "/services/graha-dosha",
    },
    {
      img: "Group 32.png",
      title: "Vastu Shastra & Energy Alignment",
      link: "/services/vastu",
    },
    {
      img: "Group 33.png",
      title: "Health & Well-being Astrology",
      link: "/services/health",
    },
    {
      img: "Group 34.png",
      title: "Numerology, Palmistry & Tarot Readings",
      link: "/services/numerology",
    },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#fff5dc] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Bring Services From Brajdham
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug md:leading-tight">
              <span className="text-red-600">Sacred</span>{" "}
              Services for <br className="hidden sm:block" />
              Your <span className="text-orange-500">Spiritual Journey</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
              Expert Pandits for Your Sacred Ceremonies!
            </p>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium shadow-lg transition">
                Book Your Service
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/krishna_Service.png"
              alt="Krishna"
              width={450}
              height={450}
              priority
              className="object-contain w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* 7 Services Row with Wrapper */}
      <section className="w-full bg-gray-50 py-10">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 bg-white shadow-md rounded-xl p-6 md:p-10 
          transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 place-items-center">
            {services.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                {/* Circle Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-red-200">
                  <Image
                    src={`/assets/service-img/${service.img}`}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
                    className="object-cover object-center"
                  />
                </div>
                {/* Caption */}
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center w-24 sm:w-28 md:w-32">
                  {service.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <AllServices />

      {/* Happy Customers Section */}
      <CustomerTestimonials />
    </main>
  );
}
