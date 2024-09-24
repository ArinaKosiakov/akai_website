import { ReactNode } from "react";
import Artbar from "../../components/artbar";

export const metadata = {
  title: "Akaiko - Portfolio",
  description: "Portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-karlatext-xl h-full overflow-y-scroll bg-gray-background text-white scrollbar-hide">
      <div>{children}</div>
    </div>
  );
}
