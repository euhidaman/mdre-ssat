import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MDRE & SSAT Labs | NTUST",
  description: "Movement Diagnosis and Rehabilitation Engineering (MDRE) & Sport Science and Athletics Training (SSAT) Laboratories at National Taiwan University of Science and Technology.",
  keywords: ["MDRE", "SSAT", "NTUST", "Medical Device", "Rehabilitation", "Sport Science", "Engineering", "Research Lab"],
  authors: [{ name: "Euhid Aman", url: "https://github.com/euhidaman" }],
  creator: "Euhid Aman",
  publisher: "MDRE & SSAT Labs",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
