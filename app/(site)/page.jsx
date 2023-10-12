import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import HowWeWork from "./components/SecondaryBanner/HowWeWork";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      {/* <HowWeWork /> */}
      <Reviews />
    </div>
  );
}
