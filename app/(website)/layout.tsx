/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import localFont from "next/font/local";
import { Karla } from "next/font/google";

import { SanityLive } from "../(sanity)/live";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const eiko = localFont({
  src: "../../public/fonts/PPEiko-Medium.otf",
  display: "swap",
  preload: true,
  weight: "500",
  style: "normal",
  variable: "--font-eiko",
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-karla",
});

export const metadata = {
  keywords: "digitalart, art, conceptart, environment,design",
  title: {
    template: "DullAkai - %s",
    default: "DullAkai - Environment designer / Digital artist",
  },
  description:
    "I'm a digital artist from Italy. This is my digital portfolio where all of my most recent and best works are displayed. ",
  metadataBase: new URL("https://www.dullakai.com"),
  openGraph: {
    images: {
      url: "/logos/og-image.png",
      width: 1280,
      height: 800,
    },
  },
  icons: {
    icon: {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    shortcut: "/favicon/favicon.ico",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicon/favicon-16x16.png",
      },
    ],
    apple: {
      url: "/images/favicon/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eiko.variable} ${karla.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-pfd flex h-[100dvh] flex-col bg-custom_gray-700 font-normal">
        <Navbar />
        <ToastContainer position="top-right" />
        <div className="mx-auto my-3 w-9/12 flex-1">{children}</div>
        <Footer />

        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          async
        />
      </body>
    </html>
  );
}
