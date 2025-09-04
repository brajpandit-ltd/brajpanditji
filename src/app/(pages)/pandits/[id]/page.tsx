import { notFound } from "next/navigation";
import pandits from "@/data/pandits.json";
import { Pandit } from "@/types/pandit";
import Image from "next/image";

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

  return (
    <main className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src={pandit.image}
            alt={pandit.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {pandit.name}
          </h1>
          <p className="text-lg text-orange-600 mb-2">
            {pandit.specialization}
          </p>
          <p className="text-gray-700 mb-4">{pandit.experience}</p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {pandit.description || "This pandit is highly experienced in Vedic rituals and ceremonies."}
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition">
            Book This Pandit
          </button>
        </div>
      </div>
    </main>
  );
}
