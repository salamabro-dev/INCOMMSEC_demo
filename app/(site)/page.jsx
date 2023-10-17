import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import HowWeWork from "./components/SecondaryBanner/HowWeWork";
import Reviews from "./components/Reviews/Reviews";
import Pricing from "./components/Pricing/Pricing";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      {/* <HowWeWork /> */}
      <Reviews />
      <Pricing />
      <Form />
      <Footer />
    </div>
  );
}
