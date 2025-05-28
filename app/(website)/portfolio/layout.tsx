import { ReactNode } from "react";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-karlatext-xl mx-auto h-full w-[90%] overflow-y-scroll bg-custom_gray-700 text-white scrollbar-hide lg:w-full">
      <div>{children}</div>
    </div>
  );
}
