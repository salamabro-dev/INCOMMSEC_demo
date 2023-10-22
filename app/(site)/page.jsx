import Banner from "./components/Banner/Banner";
import HowWeWork from "./components/SecondaryBanner/HowWeWork";
import Reviews from "./components/Reviews/Reviews";
import Pricing from "./components/Pricing/Pricing";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <main>
      <Banner />
      <HowWeWork />
      <Reviews />
      <Pricing />
      <Form />
    </main>
  );
}
