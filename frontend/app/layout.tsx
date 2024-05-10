import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <HeaderMenu />
        {children}
        </body>
    </html>
  );
}
