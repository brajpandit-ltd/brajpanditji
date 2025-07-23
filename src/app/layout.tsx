import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { RootProvider } from "@/providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable}`}>
        <RootProvider>
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        </RootProvider>
      </body>
    </html>
  );
}
