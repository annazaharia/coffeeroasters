import ChooseUs from "../components/ChooseUs";
import Collection from "../components/Collection";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OrderSteps from "../components/OrderSteps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <ChooseUs />
      <OrderSteps />
      <Footer />
    </>
  );
}
