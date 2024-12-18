/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import localFont from "next/font/local";
import { Karla } from "next/font/google";

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
  title: "DullAkai",
  description: "Personal webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eiko.variable} ${karla.variable}`}>
      <body className="font-pfd flex h-[100dvh] flex-col overflow-hidden bg-custom_gray-700 font-normal">
        <Navbar />
        <div className="mx-auto my-3 w-9/12 flex-1 overflow-y-auto scrollbar-hide">
          {children}
        </div>
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
