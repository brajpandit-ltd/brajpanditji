"use client";

import { notFound } from "next/navigation";
import pandits from "@/data/pandits.json";
import { Pandit } from "@/types/pandit";
import Image from "next/image";
import { Star } from "lucide-react";

interface PanditPageProps {
  params: { id: string };
}

export default function PanditDetailPage({ params }: PanditPageProps) {
  const pandit = (pandits as Pandit[]).find(
    (p) => p.id.toString() === params.id
  );

  if (!pandit) {
    return notFound();
  }

  const reviews = [
    { name: "Lalit Sharma", date: "26 Mar, 2025", comment: "Nice but fast reply is necessary" },
    { name: "Lalit Sharma", date: "26 Mar, 2025", comment: "Nice but fast reply is necessary" },
    { name: "Lalit Sharma", date: "26 Mar, 2025", comment: "Nice but fast reply is necessary" },
    { name: "Lalit Sharma", date: "26 Mar, 2025", comment: "Nice but fast reply is necessary" },
  ];

  return (
    <main className="px-6 md:px-12 lg:px-20 py-16 max-w-4xl mx-auto">
      {/* Header with circular image */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <Image
            src={pandit.image}
            alt={pandit.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">{pandit.name}</h1>
          <p className="text-lg text-gray-500">{pandit.experience} of Experience</p>
          <p className="text-gray-600">{pandit.specialization}</p>
          {/* Ratings */}
          <div className="flex items-center gap-2 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
            <span className="text-gray-600 font-medium ml-2">5.0</span>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium shadow transition">
              Book Your Session
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium shadow transition">
              Call Us Directly
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          {pandit.About_Me ||
            "I am an award-winning renowned holistic healer and life coach. I'm committed to helping people improve all aspects of their lives, including love, relationships, career, wealth, and day-to-day concerns, to find happiness and bliss. Astrology has always been my passion; it's a source of inspiration, spirituality, and God's words for me. I developed a sophisticated understanding of astrology and a strong interest in it when I was 20. In the two decades, I have examined 2500+ natal charts using my in-depth knowledge of astrology. In addition, I have expertise in Tarot Reading, Numerology, Vastu, Aromatherapy, Runes reading, Angel therapy, Sound healing, Magic spells, Magical herbs, Face reading, Palm reading, Crystal healing, Signature analysis, Switchword, Bach flower remedies, Mantra remedies, Aura readings, Chakra balancing, and other techniques. I also give workshops worldwide on topics such as Nakshatra, Numerology, Tarot reading, Vastu, advanced Ho'oponopono technique, Law of Attraction, etc. People who receive my advice can make wiser choices and improve the quality of their lives. My clients come from all over the world, including India, Canada, Africa, China, Russia, Fiji, Australia, and the US."}
        </p>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Reviews & Ratings</h2>
        <div className="flex flex-col gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{review.name}</span>
                <span className="text-gray-400 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
