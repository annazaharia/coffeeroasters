import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCoffeePlanContext } from "../contexts/CoffeePlanContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const { isValidPlan, resetPreferences } = useCoffeePlanContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isValidPlan()) {
      resetPreferences();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="message-confirm">Thank you! Your order has been confirmed. <br/>
      You will receive an e-mail with delivery details shortly.</div>
      <img src ="/coffee-delivery.jpg" className="img-confirm"/>
      <Footer />
    </>
  );
}
