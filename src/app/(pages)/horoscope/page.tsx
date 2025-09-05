"use client";

import Image from "next/image";
import Link from "next/link";

const zodiacSigns = [
  { name: "Aries", sign: "aries" },
  { name: "Taurus", sign: "taurus" },
  { name: "Gemini", sign: "gemini" },
  { name: "Cancer", sign: "cancer" },
  { name: "Leo", sign: "leo" },
  { name: "Virgo", sign: "virgo" },
  { name: "Libra", sign: "libra" },
  { name: "Scorpio", sign: "scorpio" },
  { name: "Sagittarius", sign: "sagittarius" },
  { name: "Capricorn", sign: "capricorn" },
  { name: "Aquarius", sign: "aquarius" },
  { name: "Pisces", sign: "pisces" },
];

export default function HoroscopePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#fff5dc] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-gray-900">
              <span className="text-red-600">Horoscope</span> & Kundli Readings
            </h1>
            <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              Unlock the secrets of your destiny with accurate{" "}
              <span className="font-semibold">Vedic Horoscope</span> and{" "}
              <span className="font-semibold">Kundli Readings</span>. 
              Get insights into your life, career, love, and spiritual path.
            </p>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition">
                Book Your Horoscope
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/horoscope.jpg"
              alt="Horoscope Kundli"
              width={450}
              height={450}
              className="object-contain w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Zodiac Signs */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Choose Your Zodiac Sign
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {zodiacSigns.map((zodiac) => (
              <Link
                key={zodiac.sign}
                href={`/zodiac/${zodiac.sign}`}
                className="bg-[#fff5dc] hover:bg-[#ffeec0] transition rounded-2xl shadow p-6 flex items-center justify-center text-center font-medium text-gray-800 text-sm sm:text-base"
              >
                {zodiac.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Horoscope Section */}
      <section className="w-full bg-[#f9fafb] py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Why Consult Horoscope & Kundli?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Our expert astrologers bring centuries-old wisdom of Vedic Astrology
            to provide clarity and guidance in your life. Whether it’s love,
            marriage, career, finance, or health — find the answers you seek.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Accurate Predictions</h3>
              <p className="text-gray-600 text-sm">
                Based on authentic Vedic Astrology principles.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Personal Guidance</h3>
              <p className="text-gray-600 text-sm">
                Tailored insights into your Kundli and life path.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Remedies & Solutions</h3>
              <p className="text-gray-600 text-sm">
                Get effective remedies for Graha Dosha and life challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
