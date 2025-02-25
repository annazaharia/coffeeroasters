import OurCommitment from "../components/OurCommitment";
import Navbar from "../components/Navbar";
import OurStory from "../components/OurStory";
import QualityStandards from "../components/QualityStandards";
import Headquarters from "../components/Headquarters";
import { Footer } from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <OurStory />
      <OurCommitment />
      <QualityStandards />
      <Headquarters/>
      <Footer/>
    </>
  );
}
