"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo/logo_bianco.png";
import brush from "../../public/brush.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

function Navbar() {
  let Links = [
    { name: "Portfolio", link: "/portfolio" },
    { name: "About me", link: "/about" },
    { name: "Commissions", link: "/commissions" },
    { name: "Contacts", link: "/contacts" },
  ];

  const path = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex h-20 w-full justify-center align-middle shadow-sm md:mb-10">
      <div className="flex h-full w-10/12 flex-row items-center justify-between">
        {/* logo */}
        <div className="md:ml-6">
          <Link href={"/"}>
            <Image width={70} height={70} src={logo} alt="logo of the " />
          </Link>
        </div>{" "}
        {/* MOBILE MENU */}
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white/70"></span>
            <span className="block h-0.5 w-8 bg-white/70"></span>
            <span className="block h-0.5 w-8 bg-white/70"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute right-0 top-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>{" "}
            <ul className="flex min-h-[250px] flex-col items-center justify-between text-white/70">
              <li className="my-8 border-b border-custom_gray-500 uppercase">
                <a href="/about">About me</a>
              </li>
              <li className="my-8 border-b border-custom_gray-500 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="my-8 border-b border-custom_gray-500 uppercase">
                <a href="/commissions">Commissions</a>
              </li>
              <li className="my-8 border-b border-custom_gray-500 uppercase">
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </div>
        </section>
        {/* links */}
        <div className="xs:hidden sm:hidden md:block">
          <ul className="flex flex-row items-center justify-center text-white text-opacity-70">
            {Links.map((link) => (
              <li
                key={link.name}
                className="z-10 mx-6 w-[100px] hover:cursor-pointer"
              >
                <Link
                  href={link.link}
                  className="group flex flex-col items-center justify-center hover:text-white"
                >
                  {link.name}
                  <motion.div
                    className="absolute top-0"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeIn",
                      },
                    }}
                  >
                    <Image src={brush} alt="brush" width={110} height={100} />
                  </motion.div>
                  <Image
                    src={brush}
                    alt="brush"
                    width={110}
                    height={100}
                    className={`absolute top-0 ${path === link.link ? "block" : "hidden"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #3f4041;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
}

export default Navbar;
