"use client";

import { CardBody, CardContainer, CardItem } from "@/utils/dialog-ui";
import Image from "next/image";
import Link from "next/link";

const Dialog = ({ setOpenDialog }) => {
  return (
    <CardContainer>
      <CardBody className="bg-orange-500 relative group/card w-auto  h-auto rounded-xl p-6 border  ">
        <div className="flex justify-end">
          <CardItem
            translateZ={20}
            onClick={() => setOpenDialog(false)}
            as={"button"}
            className={` p-3 rounded-full cursor-pointer text-black font-normal border border-white bg-orange-400 `}
          >
            <Image src="/close.png" alt=""  width={10} height={10}/>
          </CardItem>
        </div>
        <CardItem
          translateZ={20}
          className="text-xl text-center font-bold text-white dark:text-white"
        >
          This page is just a Demo
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-center text-sm mt-2 dark:text-neutral-300"
        >
          Feel Free to contact me to work the whole project for you
        </CardItem>
        <CardItem translateZ="100" className="mt-4">
          <Image
            src="/products/dialog.png"
            height={150}
            width={300}
            className="object-cover mt-10 m-auto"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://ghaith-portfolio.vercel.app/contact"
            target="__blank"
            className={`px-4 py-2 rounded-xl text-black font-normal border border-white bg-orange-400`}
          >
            contact me
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Dialog;
