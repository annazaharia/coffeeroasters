import { useState } from "react";
import Accordion from "./Accordion";
import OrderSummary from "./OrderSummary";
import SideMenu from "./SideMenu";
import OrderSummaryModal from "./OrderSummaryModal";
import { useCoffeePlanContext } from "../../contexts/CoffeePlanContext";

export default function CoffeePlan() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isValidPlan } = useCoffeePlanContext();

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
