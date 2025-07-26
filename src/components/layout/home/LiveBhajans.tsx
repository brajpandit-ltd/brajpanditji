// 🔱 LiveBhajans.tsx — Horizontal Scrollable Bhajans Section (© 2025 Jay Rana)

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/unitsFun";

interface Bhajan {
  id: string;
  title: string;
  subtitle?: string;
  thumbnailUrl: string;
}

const dummyBhajans: Bhajan[] = [
  {
    id: "1",
    title: "Shiv Tandav Stotra",
    subtitle: "By Shankar Mahadevan",
    thumbnailUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "2",
    title: "Hanuman Chalisa",
    subtitle: "Live Bhajan | Rameshbhai",
    thumbnailUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "3",
    title: "Om Jai Jagdish Hare",
    subtitle: "Evening Aarti Special",
    thumbnailUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "4",
    title: "Ram Siya Ram",
    subtitle: "Heart Touching Live",
    thumbnailUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "5",
    title: "Krishna Bhajan",
    subtitle: "Govind Bolo Hari Gopal Bolo",
    thumbnailUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
  {
    id: "6",
    title: "Maa Durga Aarti",
    subtitle: "Live from Temple",
    thumbnailUrl:
      "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
  },
];

const LiveBhajans: React.FC = () => {
  return (
    <section className="relative py-12 mx-4 md:mx-8">
      <div className="title border-l-4 border-secondary pl-4 transition-all">
        <h4 className="text-sm md:text-base text-primary">🎶 Live Bhajans</h4>
        <h2 className="text-xl font-bold">
          Listen to powerful bhajans live from temples and mandirs
        </h2>

        <p className="text-sm md:base">
          Experience the Power of Vedic Rituals, Anytime, Anywhere. Book Expert
          Pandits for Your Sacred Ceremonies!
        </p>
      </div>

      <div className="overflow-x-auto mt-3 md:mt-4">
        <div className="flex gap-3 snap-x snap-mandatory overflow-x-scroll">
          {dummyBhajans.map((bhajan, index) => (
            <div
              key={bhajan.id + index}
              className="w-full min-w-[230px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group snap-start"
            >
              <Link href={`/live/${slugify(bhajan.title)}}-${bhajan.id}`}>
                <Image
                  src={bhajan?.thumbnailUrl}
                  alt={bhajan?.title}
                  width={230}
                  height={100}
                  className="object-cover h-[150px] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-2">
                  <h3 className="text-sm font-bold line-clamp-1">
                    {bhajan?.title}
                  </h3>
                  {bhajan?.subtitle && (
                    <p className="text-xs line-clamp-1">{bhajan.subtitle}</p>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveBhajans;
