import { dancingScript } from "@/utils/fonts";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-12 items-center md:flex-row md:justify-around pt-28  bg-orange-100">
      <div>
        <h1 className={`${dancingScript.className} text-6xl md:text-8xl`}>
          Bread Bakery
        </h1>
        <p className="text-2xl">Simply delicious</p>
      </div>
      <Image src="/mix-bread.png" alt="" width={380} height={380} />
    </div>
  );
};

export default Showcase;
