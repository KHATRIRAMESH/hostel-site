import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Goma's Girl Hostel | Safe & Homely Stay in Kathmandu",

  icons: {
    icon: "logo.ico",
  },
  description: "A safe, comfortable, and girl-friendly hostel in Kathmandu offering 24/7 security, hygienic food, and a home-like atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "antialiased font-sans bg-brand-50/50 text-slate-800"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
