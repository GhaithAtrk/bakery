"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { dancingScript } from "@/utils/fonts";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const { colors } = useContext(ThemeContext);

  const [toggleMenu, setToggleMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="fixed z-10">
      <div className="relative w-screen">
        <div
          className={`w-[90%]  rounded-full mx-auto mt-2 border-black border-b-4 p-2 md:px-8 md:py-4 ${colors.primary}`}
        >
          {/* web view */}
          <div className="hidden md:flex justify-between">
            <nav>
              <ul className="md:flex gap-4 text-xl">
                <li className="hover:text-white cursor-pointer">
                  <Link href="#products">Products</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link href="#deal">Deals</Link>
                </li>
              </ul>
            </nav>
            <Link href="/" className="md:block">
              <div
                className={`absolute left-[50%] 
            ${
              isScrolled ? "top-[12%]  w-24 h-24 " : "top-[20%] w-36 h-36"
            } transform -translate-x-1/2 flex flex-col items-center bg-white  rounded-full border-4 border-black z-10 transition ease-in-out duration-1000`}
              >
                <img src="/bread.png" alt="" />
                <div
                  className={` ${
                    isScrolled ? "w-28 h-10" : "text-2xl w-40 h-10"
                  } ${
                    dancingScript.className
                  } bg-orange-300 border-2 flex justify-center border-black`}
                >
                  Bread Bakery
                </div>
              </div>
            </Link>
            <nav>
              <ul className="md:flex gap-4 text-xl">
                <li className="hover:text-white cursor-pointer">
                  <Link href="#about">About Us</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link href="#testimonies">Testimonies</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* mobile view */}
          <div className="flex justify-between items-center md:hidden">
            <Link href="/">
              <div
                className={` w-12 h-12  flex flex-col items-center bg-white  rounded-full border-2 border-black `}
              >
                <img src="/bread.png" alt="" />
                <div
                  className={`${dancingScript.className} w-16 text-xs bg-orange-300 border-2 flex justify-center border-black`}
                >
                  Bread Bakery
                </div>
              </div>
            </Link>
            <div className="relative">
              <button
                type="button"
                class="rounded-full bg-white border-2 border-black p-3 "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span class="text-white ">
                  {toggleMenu ? (
                    <img src="/menu.png" alt="" className="w-[12px]" />
                  ) : (
                    <img src="/close.png" alt="" className="w-[10px]" />
                  )}
                </span>
              </button>

              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                hidden={toggleMenu}
              >
                <ul className="text-center text-xl">
                  <li className="hover:text-orange-500 cursor-pointer py-2">
                    <Link href="#products">Products</Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer py-2">
                    <Link href="#deal">Deals</Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer py-2">
                    <Link href="#about">About Us</Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer py-2">
                    <Link href="#testimonies">Testimonies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
