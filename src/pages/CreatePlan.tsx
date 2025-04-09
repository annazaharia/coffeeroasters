import CoffeePlan from "../components/coffee-plan/CoffeePlan";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OrderSteps from "../components/OrderSteps";
import PageTitle from "../components/PageTitle";

export default function CreatePlan() {
  return (
    <>
      <PageTitle title="Create Plan" />
      <Navbar />
      <Hero
        title="Create plan"
        subtitle="Coffee the way you wanted it to be. For coffee delivered<br/> tomorrow, or next week. For whatever brew method you use. For<br/> choice, for convenience, for quality."
        cover="create-plan-story.jpg"
        titleTag="h1"
      />
      <OrderSteps extraClass="create-plan" />
      <CoffeePlan />
      <Footer />
    </>
  );
}
