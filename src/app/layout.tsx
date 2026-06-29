import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EB_Garamond } from "next/font/google";
import favicon from "./favicon.png";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Murerfirmaet Kongsbro & Machado",
  description: "Murerfirmaet Kongsbro & Machado",
  icons: {
    icon: [{ url: favicon.src, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head></head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
