// 🔱 LiveBhajans.tsx — Horizontal Scrollable Bhajans Section (© 2025 Jay Rana)

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="py-12 px-4 sm:px-8 lg:px-16 ">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-2">
          🎶 Live Bhajans
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Listen to powerful bhajans live from temples and mandirs
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-4 hide-scrollbar">
          {dummyBhajans.map((bhajan, index) => (
            <div
              key={bhajan.id + index}
              className="min-w-[250px] md:min-w-[280px] lg:min-w-[300px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group snap-start"
            >
              <Link href={`/live/${bhajan.id}`}>
                <div className="relative w-full h-[200px]">
                  <Image
                    src={bhajan.thumbnailUrl}
                    alt={bhajan.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md font-bold text-gray-800 dark:text-white line-clamp-1">
                    {bhajan.title}
                  </h3>
                  {bhajan.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                      {bhajan.subtitle}
                    </p>
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
