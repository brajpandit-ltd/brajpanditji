import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout";
import { Header } from "@/components/layout";
import ThemeProvider from "@/providers/themeProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braj Pandit Ji",
  description:
    "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable}`}>
        <ThemeProvider>
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          ;
        </ThemeProvider>
      </body>
    </html>
  );
}

// // src/app/(user)/home/page.tsx

// import React from "react";
// import HeroSection from "@/components/user/home/HeroSection";
// import HomeProducts from "@/components/user/home/HomeProducts";
// import VerifiedPanditjis from "@/components/user/home/VerifiedPanditjis";
// // import BlogSection from "@/components/user/home/BlogSection";
// // import FamousPlaces from "@/components/user/home/FamousPlaces";
// import LiveBhajans from "@/components/user/home/LiveBhajans";
// // import PujaServices from "@/components/user/home/PujaServices"; // Add this when it exists

// export default function HomePage() {
//   return (
//     <div className="flex flex-col gap-12 px-4 md:px-12">
//       <HeroSection />
//       <HomeProducts />
//       <VerifiedPanditjis />
//       {/* <FamousPlaces /> */}
//       <LiveBhajans />
//       {/* <BlogSection /> */}
//     </div>
//   );
// }
