import About from "@/components/About";
import Deal from "@/components/Deal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Showcase from "@/components/Showcase";
import Testimonies from "@/components/Testimonies";

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <About />
      <Products />
      <Deal />
      <Testimonies />
      <Footer />
    </>
  );
}
