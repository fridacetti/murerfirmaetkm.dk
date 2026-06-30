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
  title: "Murerfirmaet Kongsbro & Machado – Professionelt murerarbejde",
  description: "Murerfirmaet Kongsbro & Machado udfører professionelt murerarbejde i København og omegn. Kontakt os for kvalitet, erfaring og solidt håndværk.",
  icons: {
    icon: [{ url: favicon.src, type: "image/png" }],
  },
  openGraph: {
    title: "Murerfirmaet Kongsbro & Machado",
    description: "Professionelt murerarbejde i København og omegn. Kvalitet, erfaring og solidt håndværk.",
    url: "https://www.murerfirmaetkm.dk",
    siteName: "Murerfirmaet Kongsbro & Machado",
    locale: "da_DK",
    type: "website",
  },
  alternates: {
    canonical: "https://www.murerfirmaetkm.dk",
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
