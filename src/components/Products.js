"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { dancingScript } from "@/utils/fonts";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import Dialog from "./Dialog";

const products = [
  {
    id: 1,
    name: "Baguette",
    price: "3.5$",
    description: "Tastes delicious",
    image: "/products/bread1.jpg",
  },
  {
    id: 2,
    name: "Whole Grain",
    price: "4$",
    description: "Smells heavenly",
    image: "/products/bread2.jpg",
  },
  {
    id: 3,
    name: "Seeded Artisan",
    price: "3$",
    description: "Feels fluffy",
    image: "/products/bread3.jpg",
  },
  {
    id: 4,
    name: "Classical Artisan",
    price: "4$",
    description: "Looks golden",
    image: "/products/bread4.jpg",
  },
  {
    id: 5,
    name: "Sandwish Loaves",
    price: "2$",
    description: "Satisfies hunger",
    image: "/products/bread5.jpg",
  },
  {
    id: 6,
    name: "Seeded Croissant",
    price: "4$",
    description: "Baked perfectly",
    image: "/products/bread6.jpg",
  },
];

const Products = () => {
  const { colors } = useContext(ThemeContext);

  const [openDialog, setOpenDialog] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      id="products"
      className={`${colors.secondary} p-10 md:h-screen md:p-20 border`}
    >
      <h2 className={`${dancingScript.className} text-2xl my-8`}>
        Some Of What We Bake
      </h2>

      <div className="grid md:grid-cols-3 my-10 w-full">
        {products.map((item, idx) => (
          <div
            className="m-auto relative group my-6"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`${colors.primary} flex gap-3 md:gap-5 text-center p-4 rounded-md h-full`}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 15,
                      x: 110,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 10, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className={`absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md ${colors.primary} shadow-xl px-4 py-2`}
                  >
                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent to-transparent h-px " />
                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent to-transparent h-px " />
                    <div className="font-bold text-white relative z-30 text-base">
                      {item.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Image
                onMouseMove={handleMouseMove}
                height={400}
                width={400}
                src={item.image}
                alt={item.name}
                className="object-cover !m-auto !p-0 object-top h-32 w-32 border-2 group-hover:scale-105 relative transition duration-500"
              />
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
                <div>
                  <button
                    className="border px-2 bg-orange-400"
                    onClick={() => setOpenDialog(true)}
                  >
                    Add To cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openDialog && (
        <div className="fixed top-0 left-0 backdrop-blur-sm bg-white/30 w-full h-full z-10">
          <Dialog setOpenDialog={setOpenDialog} />
        </div>
      )}
    </div>
  );
};

export default Products;
