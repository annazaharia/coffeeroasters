import { useNavigate } from "react-router-dom";
import { Sections } from "../../data/Sections";
import { OrderSummaryModalProps } from "../../interfaces/OrderSummaryModalProps";
import SummaryText from "./SummaryText";
import { usePlanContext } from "../../contexts/PlanContext";

export default function OrderSummaryModal({ isOpen, onClose }: OrderSummaryModalProps) {
  const { preferences, resetPreferences } = usePlanContext();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    const basePrice = 10;
    const deliveries = Sections.find((section) => section.id === "deliveries");
    const deliveryOption = deliveries?.options.find((option) => option.id === preferences.deliveries);

    const quantityMultiplier =
      {
        "250g": 1,
        "500g": 2,
        "1000g": 4,
      }[preferences.quantity] || 1;

    const deliveryMultiplier =
      {
        everyWeek: 4,
        everyTwoWeeks: 2,
        everyMonth: 1,
      }[preferences.deliveries] || 1;

    return (basePrice * quantityMultiplier + (deliveryOption?.price ?? 0) * deliveryMultiplier).toFixed(2);
  };

  const handleCheckout = () => {
    onClose();

    setTimeout(() => {
      resetPreferences();
      navigate("/");
    }, 1000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal fade show" style={{ display: "block" }} id="orderSummaryModal" onClick={onClose}>
        {/* Clicking on Modal won't close it */}
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Order Summary</h2>
            </div>
            <div className="modal-body">
              <SummaryText />
              <p>
                Is this correct? You can proceed to checkout or go back to plan selection if something is off.
                Subscription discount codes can also be redeemed at the checkout.
              </p>
              <div className="price-summary d-flex align-items-center">
                <h3 className="col-6">${calculateTotalPrice()}/mo</h3>
                <div className="col-6 d-grid">
                  <button className="btn btn-primary" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}
