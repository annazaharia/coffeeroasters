import { useState } from "react";
import Accordion from "./Accordion";
import OrderSummary from "./OrderSummary";
import SideMenu from "./SideMenu";
import { Preferences } from "../../interfaces/Preferences";
import OrderSummaryModal from "./OrderSummaryModal";
import { usePlanContext } from "../../contexts/PlanContext";

export default function CoffeePlan() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { preferences } = usePlanContext();

  const isValidPlan = () => {
    const requiredPreferences = ["coffeeType", "beanType", "quantity", "deliveries"];

    if (preferences.coffeeType && preferences.coffeeType !== "capsule") {
      requiredPreferences.push("grindOption");
    }

    return requiredPreferences.every((preference) => {
      return preferences[preference as keyof Preferences];
    });
  };

  return (
    <section className="container coffee-plan">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <SideMenu />
        </div>
        <div className="col-lg-8 offset-lg-1 col-sm-12">
          <Accordion />
          <OrderSummary />
          <div className="text-lg-end text-center mt-lg-4 mt-md-5">
            <button className="btn btn-primary" disabled={!isValidPlan()} onClick={() => setIsModalOpen(true)}>
              Create my plan!
            </button>
          </div>
        </div>
      </div>
      <OrderSummaryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
