import Link from "next/link";
import Image from "next/image";
import { FaUsers, FaClock, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/common";
import { trimWords } from "@/utils/unitsFun";

const PoojaCard = ({ pooja }: { pooja: any }) => {
  return (
    <div className="w-full max-w-[300px] bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={pooja.image}
          alt={pooja.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        {pooja.popular && (
          <span className="absolute top-3 left-3 bg-white text-[#a11d1d] font-semibold text-sm rounded-full px-4 py-1 shadow">
            Popular puja
          </span>
        )}
      </div>

      <div className="p-4 mt-5">
        <h3 className="text-xl font-semibold">{pooja.title}</h3>
        <p className="text-sm text-gray-600 mt-2">
          {trimWords(pooja.description, 10)}
        </p>

        <div className="flex items-center gap-4 text-xs my-4">
          <div className="flex items-center gap-1">
            <FaClock className="text-orange-500" />
            <span>2-3 Hours</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="text-orange-500" />
            <span>Group Puja</span>
          </div>
        </div>

        <Link href={`/services/${pooja.slug}`} className="group">
          <Button
            label="Book Sacred puja"
            size="small"
            variant="primary"
            icon={
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            }
            iconPosition="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default PoojaCard;
