import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-karlatext-xl h-full overflow-y-scroll bg-custom_gray-700 text-white scrollbar-hide">
      <div>{children}</div>
    </div>
  );
}
