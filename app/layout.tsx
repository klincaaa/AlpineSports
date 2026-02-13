import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavbar from "./components/MainNavbar";
import Footer from "@/app/components/Footer"
import { Space_Grotesk } from "next/font/google";
import { Lora } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],            // required
  weight: ["400", "500", "700"], // choose only the weights you need
  variable: "--font-spaceGrotesk",     // optional: makes it available as CSS variable
});

const lora = Lora({
  subsets: ["latin"],            // required
  weight: ["400", "500", "700"], // choose only the weights you need
  variable: "--font-lora",     // optional: makes it available as CSS variable
})

export const metadata = {
  title: {
    default: "Alpine Sports Andermatt",
    template: "%s | Alpine Sports Andermatt",
  },
  description:
    "Premium ski school in Andermatt. Private lessons, group lessons, off-piste guiding.",

  metadataBase: new URL("https://alpinesport.netlify.app"),

  openGraph: {
    title: "Alpine Sports Andermatt",
    description:
      "Premium ski school in Andermatt. Private lessons, group lessons, off-piste guiding.",
    url: "https://alpinesport.netlify.app",
    siteName: "Alpine Sports Andermatt",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "images/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${space_grotesk.variable} ${lora.variable}`}
      >
        <MainNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
