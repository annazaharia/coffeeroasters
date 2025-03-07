import ChooseUs from "../components/ChooseUs";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import HeroWithButton from "../components/HeroWithButton";
import Navbar from "../components/Navbar";
import OrderSteps from "../components/OrderSteps";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithButton />
      <Collection />
      <ChooseUs />
      <OrderSteps extraDetails={true} />
      <Footer />
    </>
  );
}
