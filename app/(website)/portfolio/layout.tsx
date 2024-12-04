import { ReactNode } from "react";
import Artbar from "../../components/artbar";

export const metadata = {
  title: "Akaiko - Portfolio",
  description: "Portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-karlatext-xl bg-custom_gray-700 h-full overflow-y-scroll text-white scrollbar-hide">
      <div>{children}</div>
    </div>
  );
}
