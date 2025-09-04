// import { AllServices } from "@/components/ServiceCard/AllServices";
// import CustomerTestimonials from "@/components/customer/customer";
// // import LatestArticles from "@/components/latestArticals/latestArticals";
// // import VerifiedPandits from "@/components/PanditCard/VerifiedPandits";
// import Image from "next/image";

// export default function ServicesPage() {
//   return (
//     <main>
//       {/* Hero Banner */}
//       <section className="bg-[#fff5dc] w-full">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
//           {/* Left Content */}
//           <div className="space-y-6 text-center md:text-left">
//             <p className="text-gray-600 font-medium">
//               Bring Services From Brajdham
//             </p>
//             <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
//               <span className="text-red-600">Sacred</span>{" "}
//               Services for <br />
//               Your <span className="text-orange-500">Spiritual Journey</span>
//             </h1>
//             <p className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0">
//               Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
//               Expert Pandits for Your Sacred Ceremonies!
//             </p>
//             <div>
//               <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition">
//                 Book Your Service
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center md:justify-end">
//             <Image
//               src="/assets/krishna_Service.png"
//               alt="Krishna"
//               width={500}
//               height={500}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* 7 Services Row */}
//       <section className="w-full bg-white py-10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-9">
//           {[
//             "Group 28.png",
//             "Group 29.png",
//             "Group 30.png",
//             "Group 31.png",
//             "Group 32.png",
//             "Group 33.png",
//             "Group 34.png",
//           ].map((img, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center space-y-3"
//             >
//               {/* Circle Image */}
//               <div className="w-30 h-30 relative rounded-full overflow-hidden border-2 border-red-200">
//                 <Image
//                   src={`/assets/service-img/${img}`}
//                   alt={`Service ${index + 1}`}
//                   fill
//                   className="object-cover object-[center_1%]"

//                 />
//               </div>
//               {/* Caption */}
//               <p className="text-sm font-medium text-gray-800 w-36">
//                 {[
//                   "Horoscope & Kundli Readings",
//                   "Career, Business & Finance Astrology",
//                   "Love, Marriage & Relationship Astrology",
//                   "Graha Dosha Remedies & Vedic Solutions",
//                   "Vastu Shastra & Energy Alignment",
//                   "Health & Well-being Astrology",
//                   "Numerology, Palmistry & Tarot Readings",
//                 ][index]}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Premium Services Section */}
//       <AllServices />

//       {/* Happy Customers Section */}
//       <CustomerTestimonials />
//     </main>
//   );
// }





//// clickable images


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
      link: "/services/horoscope", // future page
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-600 font-medium">
              Bring Services From Brajdham
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-red-600">Sacred</span>{" "}
              Services for <br />
              Your <span className="text-orange-500">Spiritual Journey</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0">
              Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
              Expert Pandits for Your Sacred Ceremonies!
            </p>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition">
                Book Your Service
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/krishna_Service.png"
              alt="Krishna"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 7 Services Row */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-9">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="flex flex-col items-center text-center space-y-3 group"
            >
              {/* Circle Image */}
              <div className="w-30 h-30 relative rounded-full overflow-hidden border-2 border-red-200 transition group-hover:scale-105 group-hover:shadow-lg">
                <Image
                  src={`/assets/service-img/${service.img}`}
                  alt={service.title}
                  fill
                  className="object-cover object-[center_1%]"
                />
              </div>
              {/* Caption */}
              <p className="text-sm font-medium text-gray-800 w-36">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Premium Services Section */}
      <AllServices />

      {/* Happy Customers Section */}
      <CustomerTestimonials />
    </main>
  );
}
