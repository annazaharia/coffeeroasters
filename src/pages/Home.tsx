import ChooseUs from "../components/ChooseUs";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import HeroWithButton from "../components/HeroWithButton";
import Navbar from "../components/Navbar";
import OrderSteps from "../components/OrderSteps";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <Navbar />
      <HeroWithButton />
      <Collection />
      <ChooseUs />
      <OrderSteps extraDetails={true} />
      <Footer />
    </>
  );
}
