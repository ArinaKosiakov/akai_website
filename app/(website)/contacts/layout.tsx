import { ReactNode } from "react";

export const metadata = {
  title: "Contacts",
  description: "Contacts",
};

export default function ContactsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full bg-custom_gray-700 font-karla text-xl text-white scrollbar-hide md:justify-center">
      {children}
    </div>
  );
}
