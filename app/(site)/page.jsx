import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import HowWeWork from "./components/SecondaryBanner/HowWeWork";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <HowWeWork />
    </div>
  );
}
