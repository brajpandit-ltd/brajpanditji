import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import ThemeProvider from "@/providers/themeProvider";

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
          <Header />
          <main>{children}</main>
          <Footer />
          <h1 className="text-primary">hello</h1>
        </ThemeProvider>
      </body>
    </html>
  );
}
