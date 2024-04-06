"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/utils/cn";
import { dancingScript } from "@/utils/fonts";
import React, { useContext, useEffect, useRef, useState } from "react";

const items = [
  {
    name: "Tim",
    quote:
      "Freshly baked goodness every day! This bakery's bread is a delight for the senses. The aroma, taste, and texture make it my go-to spot for a carb fix.",
    title: "One of the best.. i like how it tastes",
  },
  {
    name: "James",
    quote:
      "I can't resist the artisanal creations from this bakery. The variety is impressive, from classic baguettes to unique flavored loaves. Quality ingredients and skilled bakers make it a standout.",
    title: "One of the best.. i like how it tastes",
  },
  {
    name: "John",
    quote:
      "This bakery has turned me into a bread enthusiast. The crusty exteriors and soft interiors of their loaves are consistently perfect. A must-try for anyone who appreciates a good slice of bread!",
    title: "One of the best.. i like how it tastes",
  },
  {
    name: "Danny",
    quote:
      "Exceptional bread with a personal touch! The bakers here take pride in their craft, and it shows in every bite. It's more than just a bakery; it's an experience of flavors and passion.",
    title: "One of the best.. i like how it tastes",
  },
];

const Testimonies = () => {
  const { colors } = useContext(ThemeContext);

  const [start, setStart] = useState(false);

  const direction = "left";
  const speed = "normal";
  const pauseOnHover = true;
  const containerRef = useRef();
  const scrollerRef = useRef();

  function addAnimation() {
    if (containerRef?.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div id="testimonies" className="bg-orange-100">
      <div
        ref={containerRef}
        className={cn("scroller relative overflow-hidden py-28")}
      >
        <h2
          className={`${dancingScript.className} px-10 text-2xl my-8 md:px-20 font-extrabold`}
        >
          What Our Clients Say
        </h2>

        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`w-[350px] max-w-full relative rounded border border-b-0 flex-shrink-0 ${colors.primary} px-8 py-6 md:w-[450px]`}
            >
              <blockquote className="flex flex-col justify-between h-full">
                <span className="relative z-20 text-sm leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className=" text-sm leading-[1.6] text-white font-normal">
                      {item.name}
                    </span>
                    <span className=" text-sm leading-[1.6] text-white font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonies;
