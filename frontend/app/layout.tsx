import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "WYM - Car Rental",
  description: "Find and rent your perfect car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}