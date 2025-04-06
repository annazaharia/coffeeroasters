import { Link, useNavigate } from "react-router-dom";
import { useCoffeePlanContext } from "../../contexts/CoffeePlanContext";
import { Sections } from "../../data/Sections";
import { useAuthContext } from "../../contexts/AuthContext";

export default function CheckoutDetails() {
  const { preferences, calculateTotalPrice, isValidPlan } = useCoffeePlanContext();
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const basePrice = 10;
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

  const deliveries = Sections.find((section) => section.id === "deliveries");
  const deliveryOption = deliveries?.options.find((option) => option.id === preferences.deliveries);

  return (
    <>
      <h3>Checkout Details</h3>
      {isValidPlan() ? (
        <>
          <table className="table table-striped table-hover table-checkout">
            <tbody>
              <tr>
                <th scope="row">Preferences:</th>
                <td className="text-primary">
                  {
                    Sections.find((section) => section.id === "coffeeType")?.options.find(
                      (option) => option.id === preferences.coffeeType
                    )?.title
                  }
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <th scope="row">Bean Type:</th>
                <td className="text-primary">
                  {
                    Sections.find((section) => section.id === "beanType")?.options.find(
                      (option) => option.id === preferences.beanType
                    )?.title
                  }
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <th scope="row">Quantity:</th>
                <td className="text-primary">{preferences.quantity}</td>
                <td>
                  {quantityMultiplier} x ${basePrice}
                </td>
              </tr>
              <tr>
                <th scope="row">Frequency:</th>
                <td className="text-primary">
                  {
                    Sections.find((section) => section.id === "deliveries")?.options.find(
                      (option) => option.id === preferences.deliveries
                    )?.title
                  }
                </td>
                <td>
                  {deliveryMultiplier} x ${deliveryOption?.price ?? 0}
                </td>
              </tr>
              <tr>
                <th scope="row">Total:</th>
                <td></td>
                <td>${calculateTotalPrice()} / mo</td>
              </tr>
            </tbody>
          </table>
          {isAuthenticated && (
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
                onClick={() => navigate("/checkout/confirm")}
              >
                Confirm Subscription
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-danger text-center">
          Please <Link to="/create-plan">create a plan</Link> first to continue!
        </p>
      )}
    </>
  );
}
