import { useNavigate } from "react-router-dom";
import { OrderSummaryModalProps } from "../../interfaces/OrderSummaryModalProps";
import SummaryText from "./SummaryText";
import { useCoffeePlanContext } from "../../contexts/CoffeePlanContext";

export default function OrderSummaryModal({ isOpen, onClose }: OrderSummaryModalProps) {
  const { calculateTotalPrice } = useCoffeePlanContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();

    setTimeout(() => {
      navigate("/checkout");
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
