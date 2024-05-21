import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Footer } from "@/components/Footer/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600"], 
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Discover Our New Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <HeaderMenu />
        {children}
        <Footer />
        </body>
    </html>
  );
}
