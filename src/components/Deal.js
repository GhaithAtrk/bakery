"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { HoverBorderGradient } from "@/components/UI/HoverBorderGradient";
import Image from "next/image";
import { useContext } from "react";
import { dancingScript } from "@/utils/fonts";

const Deal = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <div
      id="deal"
      className={`h-screen md:p-20 ${colors.secondary}`}
    >
      <h2 className={`${dancingScript.className} px-10 text-2xl font-extrabold`}>
        Deal Of The Day
      </h2>
      <div className="flex justify-center items-center h-full">
        <HoverBorderGradient>
          <div
            className={`relative ${colors.tertiary} p-2 rounded w-[90%] md:w-[650px]`}
          >
            <div className="flex flex-col md:flex-row ">
              <Image
                src="/deal-of-today.jpg"
                style={{ zIndex: 3 }}
                alt=""
                width={350}
                height={350}
              />
              <div
                className={`p-5 text-center text-white ${colors.primary}`}
                style={{ zIndex: 3 }}
              >
                <h1 className="text-4xl my-4">Today&apos;s Deal</h1>
                <p className="md:my-14">
                  Buy 2 peices and get{" "}
                  <span className="text-2xl font-bold text-orange-500">
                    10%
                  </span>{" "}
                  discount on the third peice
                </p>
              </div>
            </div>
          </div>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Deal;
