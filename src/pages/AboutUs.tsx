import OurCommitment from "../components/OurCommitment";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QualityStandards from "../components/QualityStandards";
import Headquarters from "../components/Headquarters";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Hero
        title="About us"
        subtitle="Coffeeroasters began its journey of exotic discovery in 1999, <br />
            highlighting stories of coffee from around the world. We have <br />
            since been dedicated to bring the perfect cup - from bean to <br />
            brew - in every shipment."
        cover="about-us-story.jpg"
        titleTag="h2"
      />
      <OurCommitment />
      <QualityStandards />
      <Headquarters />
      <Footer />
    </>
  );
}
