"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { dancingScript } from "@/utils/fonts";
import Image from "next/image";
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
        {/* web view */}
        <div
          className={`hidden md:block w-[90%] rounded-full mx-auto mt-2 border-black border-b-4 p-2 md:px-8 md:py-4 ${colors.primary}`}
        >
          <div className="flex justify-between">
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
                <Image src="/bread.png" alt="" width={150} height={150} />
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
        </div>
        {/* mobile view */}
        <div
          className={`md:hidden w-[90%] h-[50px] rounded-full mx-auto mt-2 border-black border-b-4 p-2 md:px-8 md:py-4 ${colors.primary}`}
        >
          <Link href="/">
            <div
              className={`absolute top-1 left-6  w-12 h-12  flex flex-col items-center bg-white  rounded-full border-2 border-black `}
            >
              <Image src="/bread.png" alt="" width={150} height={150} />
              <div
                className={`${dancingScript.className} w-[70px] text-xs bg-orange-300 border-2 flex justify-center border-black`}
              >
                Bread Bakery
              </div>
            </div>
          </Link>
          <div className="absolute top-1 right-6">
            <button
              type="button"
              className="rounded-full bg-white border-2 border-black p-3 "
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span className="text-white ">
                {toggleMenu ? (
                  <Image src="/menu.png" alt="" width={10} height={10} />
                ) : (
                  <Image src="/close.png" alt="" width={10} height={10} />
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
  );
};

export default Header;
