"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function PitruPakshaPuja() {
  const [readMore, setReadMore] = useState(false);

  const description = `
Pitru Paksha Puja e-puja
A 16-day period in the Hindu calendar dedicated to ancestors and offering prayers to the deceased soul is called pitru paksha. At that time, people perform multiple rituals, including shradh, to express gratitude and seek blessings from their deceased ancestors.

As per the Hindu shastra, the souls of deceased ones reside in pitru lok, a realm between heaven and earth.

Scheduling the puja may include tarpan and pind daan to the generation of ancestors. The puja is performed for the family members who have died before their time. It ensures the ancestors’ souls get salvation.

One has to do the puja to honor their ancestors every day. If it cannot be done every day, organize the puja every month during Amavasya or Sankramanam. Also, the puja can be scheduled on the death anniversary of ancestors.

The puja should be during the 16-day period of pitru paksha between bhadrapada bahula padyami to amavasya. We owe a karmic debt to our deceased relatives.

By respectfully conducting 'pind daan' during shradha, we can pay tribute to our pitrus. Most people perform the ritual by booking a pandit to execute the puja in the right and authentic manner.

Scheduling the puja online is easy via 99Pandit. Our verified pandits perform rituals including 1100+ Beej Mantras per planet, Navgrah Havan, Hanuman & Bhairav Pujan, and customized Sankalp with your name & gotra. This ensures ancestors’ blessings and alleviates pitru dosha.
  `;

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-12">
      {/* Hero / CTA Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Pitru Paksha Puja e-Puja</h1>
          <p className="text-gray-700">
            {readMore ? description : `${description.slice(0, 300)}...`}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={() => setReadMore(!readMore)}
              className="text-red-600 font-medium underline"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
            <Link
              href="#booking-form"
              className="bg-red-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-red-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex flex-col items-center gap-3 w-full">
  <div className="relative w-full aspect-[5/4] md:aspect-[16/9]">
    <Image
      src="/assets/e-pujas/pitra.jpeg"
      alt="Pitru Paksha Puja"
      fill
      className="object-cover rounded-lg"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>



          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-0">
            <a
              href="https://youtube.com/@vedagyanam?si=587Ev8d_yQzUOVE4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/vedagyanam_official/?igsh=ODkyNHhmczZiYnhh"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Detailed About / Significance */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Significance of Pitru Paksha Puja</h2>
        <p className="text-gray-700 leading-relaxed">
          The puja is very important for those who have pitru dosha in their birth chart. As per traditional beliefs, the unhappy souls of deceased ones often return to earth until they receive moksha. Each prayer and ritual frees the soul from the cycle of life and death. Rituals include:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>1100+ Beej Mantras per planet (Navagraha, Shani, Surya, Chandra, etc.)</li>
          <li>Customized Sankalp with your name & gotra (Live Google Meet link)</li>
          <li>Navgrah Havan with ghee, sesame, and sandalwood</li>
          <li>Hanuman & Bhairav Pujan for protection</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Benefits of Pitru Paksha Puja</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Satisfies hunger and thirst of the deceased soul</li>
          <li>Boosts harmony among family members and seeks blessings</li>
          <li>Emotional healing and spiritual enlightenment</li>
          <li>Shows respect and gratitude towards ancestors</li>
          <li>Removes ancestral curses and resolves related health issues</li>
        </ul>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
        <h2 className="text-2xl font-semibold mb-4">Select Options to Book a Service</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded" />
          <input type="email" placeholder="Email" className="border p-3 rounded" />
          <input type="tel" placeholder="Phone" className="border p-3 rounded" />
          <select className="border p-3 rounded">
            <option>Hindi</option>
            <option>English</option>
          </select>
          <input type="date" className="border p-3 rounded" />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
          >
            Book Pitru Paksha Puja
          </button>
        </form>
      </section>
    </main>
  );
}
