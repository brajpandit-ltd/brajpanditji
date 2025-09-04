import Link from "next/link";
import Image from "next/image";
import { Pandit } from "@/types/pandit";

export function PanditCard({ pandit }: { pandit: Pandit }) {
  return (
    <Link href={`/pandits/${pandit.id}`}>
      <div className="rounded-xl shadow-md overflow-hidden bg-orange-50 hover:shadow-xl transition flex flex-col items-center text-center cursor-pointer">
        <div className="relative w-full h-52">
          <Image
            src={pandit.image}
            alt={pandit.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-gradient-to-b from-orange-100 to-yellow-100 w-full">
          <h3 className="text-base font-semibold">{pandit.name}</h3>
          <p className="text-sm text-gray-600">{pandit.specialization}</p>
          <p className="text-xs text-gray-500">{pandit.experience}</p>
        </div>
      </div>
    </Link>
  );
}
