import { ReactNode } from "react";
import Artbar from "../components/artbar";

export const metadata = {
  title: "Akaiko - Portfolio",
  description: "Portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full text-white font-karlatext-xl bg-gray-background overflow-y-scroll scrollbar-hide">
      <div>
        <Artbar />
        {children}
      </div>
    </div>
  );
}
