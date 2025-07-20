// ✅ app/(user)/home/page.tsx

import HeroSection from "@/components/user/home/HeroSection";
import HomeProducts from "@/components/user/home/HomeProducts";
import VerifiedPanditjis from "@/components/user/home/VerifiedPanditjis";
import LiveBhajans from "@/components/user/home/LiveBhajans";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-12">
      <HeroSection />
      <HomeProducts />
      <VerifiedPanditjis />
      <LiveBhajans />
    </div>
  );
}
