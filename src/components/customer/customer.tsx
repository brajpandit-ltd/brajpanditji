"use client";

import React from "react";
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  quote: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Singh",
    avatar: "/assets/testimonials/cust.jpg",
    role: "Devotee",
    quote:
      "We believe astrology is pure science, and we aim to create such a social impact. The Pandit Ji performed the ceremony with devotion and clarity. Very satisfied!",
  },
  {
    id: "t2",
    name: "Radha Verma",
    avatar: "/assets/testimonials/cust.jpg",
    role: "Devotee",
    quote:
      "Excellent experience — timely, respectful and deeply spiritual. The whole family felt the positive energy after the ritual.",
  },
  {
    id: "t3",
    name: "Mukesh Patel",
    avatar: "/assets/testimonials/cust.jpg",
    role: "Devotee",
    quote:
      "Professional Pandit, clear explanation of steps and meaningful chants. The service was well organized and sincere.",
  },
  {
    id: "t4",
    name: "Priya Sharma",
    avatar: "/assets/testimonials/cust.jpg",
    role: "Devotee",
    quote:
      "Beautifully conducted puja with all samagri provided. Felt very authentic and calming — highly recommended.",
  },
  {
    id: "t5",
    name: "Sneha Rao",
    avatar: "/assets/testimonials/cust.jpg",
    role: "Devotee",
    quote:
      "The Panditji was humble and precise in every ritual step. The booking & communication were smooth as well.",
  },
  {
    id: "t6",
    name: "Vikas Mehra",
    avatar: "/assets/testimonials/cust.jpg",
    role: "Devotee",
    quote:
      "I was looking for an authentic ceremony — this was perfect. Great experience for the entire family.",
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top heading + description */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Our <span className="text-primary">Happy</span>{" "}
            <span className="text-red-600">Devotees</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Discover heartfelt testimonials from devotees about their divine
            experiences — real stories of calm, blessings, and spiritual
            fulfillment after their pujas and rituals.
          </p>
        </div>

        {/* Scrollable row */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          role="list"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              role="listitem"
              className="snap-start min-w-[280px] max-w-[300px] flex-shrink-0"
            >
              <div className="relative bg-gray-100 rounded-2xl px-5 pt-16 pb-8 min-h-[260px] shadow-sm border border-gray-200">
                {/* avatar */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* content */}
                <h4 className="text-sm font-semibold text-center mb-2 mt-2">
                  {t.name}
                </h4>
                <p className="text-xs text-gray-600 leading-5 text-justify">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* hint */}
        <div className="mt-2 text-sm text-gray-400 text-right hidden sm:block">
          👉 Scroll to see more
        </div>
      </div>
    </section>
  );
}
