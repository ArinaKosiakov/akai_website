import { ReactNode } from "react";

export const metadata = {
  title: "Contacts",
  description: "Contacts",
};

export default function ContactsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-karlatext-xl flex h-full bg-custom_gray-700 text-white scrollbar-hide md:justify-center">
      {children}
    </div>
  );
}