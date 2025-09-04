
import { AllServices } from "@/components/ServiceCard/AllServices"
import CustomerTestimonials from "@/components/customer/customer";
// import LatestArticles from "@/components/latestArticals/latestArticals";
// import VerifiedPandits from "@/components/PanditCard/VerifiedPandits";
import { Button } from "@/components/ui";
import Image from "next/image";
export default function ServicesPage() {
  return (
    <main>
      {/* Hero Banner (optional) */}
    
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
            Experience the Power of Vedic Rituals, Anytime, Anywhere. 
            Book Expert Pandits for Your Sacred Ceremonies!
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
            src="/assets/krishna_Service.png" // make sure to put krishna.png in public/images folder
            alt="Krishna"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>

      {/* Premium Services Section */}
      <AllServices />

      {/* Verified Pandits Section */}
      {/* <VerifiedPandits />  */}

      {/* Happy Customers Section */}
      <CustomerTestimonials />

    </main>
  );
}
