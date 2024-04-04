"use client";

import { useContext, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { dancingScript } from "@/utils/fonts";

const About = () => {
  let words =
    "Delight in every bite! Our bakery crafts fresh and irresistible treats daily. From fluffy pastries to decadent cakes, we bake memories for every sweet moment, we knead, bake, and create a symphony of flavors. From artisanal bread that whispers of tradition to whimsical cupcakes that spark joy, our confections are crafted with love";

  const { colors } = useContext(ThemeContext);
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div id="about" className={cn("font-bold", `h-screen ${colors.secondary}`)}>
      <div className="p-5 md:p-20">
        <h2 className={`${dancingScript.className} text-2xl my-8 font-extrabold`}>
          Know About Our Business
        </h2>
        <div className="flex flex-col justify-between items-center gap-10">
          <div className="text-black text-xl text-justify leading-10 p-4 tracking-normal">
            {renderWords()}
          </div>
          <Image
            src="/long-bread.png"
            alt="bread img"
            width={800}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
