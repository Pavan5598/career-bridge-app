"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Manrope } from "next/font/google";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Placements", path: "/placements" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  const handleNavigation = (path) => {
    console.log(path);
  router.push(path);
    setOpen(false);
  };
  if(pathname.startsWith("/login") || pathname.startsWith("/dashboard") || pathname.startsWith("/user/dashboard") ){
    return null;
  }
  return (
    <nav
      className={`${manrope.className} w-full min-h-[68px] sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100`}
    >
      {/* TOP BAR */}
      <div className="max-w-[1400px] mx-auto h-[68px] flex items-center justify-between px-4 lg:px-6">

        {/* LOGO */}
        <Image
          src="/Home/CB Logo.png"
          alt="Logo"
          width={260}
          height={61}
          className="w-[200px] sm:w-[350px] md:w-[250px] lg:w-[250px] xl:w-[280px] 2xl:w-[280px] h-[50px] sm:h-[50px] md:h-[50px] lg:h-[52px] xl:h-[58px] 2xl:h-[58px] object-contain"
          priority
        />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-2 xl:gap-3 2xl:gap-5">
          {navItems.map((item, i) => {
            const isActive = pathname === item.path;
            const isHovered = hoveredItem === item.path;

            return (
              <button
              type="button"
                key={i}
                onClick={() => handleNavigation(item.path)}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative cursor-pointer whitespace-nowrap font-semibold text-[14px] xl:text-[16px] 2xl:text-[18px] px-2 py-2 transition-all duration-300
                  ${
                    isHovered
                      ? "text-[#E4202C]"
                      : isActive && !hoveredItem
                      ? "text-[#E4202C]"
                      : "text-[#2E4378] hover:text-[#E4202C]"
                  }`}
              >
                {item.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-[#2E4378] transition-all duration-300
                    ${
                      isHovered
                        ? "w-full"
                        : isActive && !hoveredItem
                        ? "w-full"
                        : "w-0"
                    }`}
                />
              </button>
            );
          })}
        </div>

        {/* LOGIN BUTTON */}
        <button className="hidden lg:flex items-center justify-center h-[42px] 2xl:h-[46px] px-5 2xl:px-6 rounded-full bg-[#2E4378] text-white font-semibold text-[13px] 2xl:text-[15px] hover:bg-[#243763] transition-all duration-300 cursor-pointer">
          Student Login
        </button>

        {/* HAMBURGER */}
        <button
          className="lg:hidden flex items-center justify-center cursor-pointer text-[28px] text-[#2E4378]"
          onClick={() => setOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[80%] sm:max-w-[340px] bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end pt-4 pr-4">
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-2xl text-[#2E4378]"
          >
            <IoMdClose />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="flex flex-col pl-4 pr-6 gap-2 -mt-2">
          {navItems.map((item, i) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={i}
                onClick={() => handleNavigation(item.path)}
                className={`text-left font-semibold text-[18px] py-2 border-b-2 transition-all duration-300
                  ${
                    isActive
                      ? "text-[#E4202C] border-[#E4202C]"
                      : "text-[#2E4378] border-transparent hover:text-[#E4202C] hover:border-[#E4202C]"
                  }`}
              >
                {item.name}
              </button>
            );
          })}

          <button
            className="mt-4 cursor-pointer bg-[#2E4378] text-white py-3 rounded-full font-semibold hover:bg-[#243763] transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Student Login
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}