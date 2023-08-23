import "./globals.css";
import "./components/navbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import localFont from "next/font/local";
import { Karla } from "next/font/google";

const eiko = localFont({
  src: "../public/fonts/PPEiko-Medium.otf",
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
  title: "Akaiko",
  description: "Personal webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${eiko.variable} ${karla.variable}`}>
      <body className="flex flex-col h-[100dvh] bg-gray-background overflow-hidden font-pfd font-normal">
        <Navbar />
        <div className="flex-1 overflow-y-auto w-full my-3 max-w-7xl mx-auto">
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
