import About from "@/components/About/About";
import Carousel from "@/components/Carousel/Carousel";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import DateShowcase from "@/components/DateShowcase/DateShowcase";

export default function Home() {
  return (
    <>
      <Carousel />
      <ProductSlider />
      <WhyChooseUs />
      <DateShowcase />
      <About />
    </>
  );
}
