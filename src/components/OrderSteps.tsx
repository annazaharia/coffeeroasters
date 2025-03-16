import { Link } from "react-router-dom";
import OrderStepsProps from "../interfaces/OrderStepsProps";

export default function OrderSteps({ extraDetails, extraClass }: OrderStepsProps) {
  return (
    <section className={`container how-it-works-section ${extraClass ?? ""}`}>
      {extraDetails && (
        <div className="row">
          <h2>How it works</h2>
        </div>
      )}

      <div className="d-none d-sm-block">
        <div className="row steps-line">
          <div className="timeline"></div>
          <div className="col-4">
            <div className="steps-circle">&nbsp;</div>
          </div>
          <div className="col-4">
            <div className="steps-circle">&nbsp;</div>
          </div>
          <div className="col-4">
            <div className="steps-circle">&nbsp;</div>
          </div>
        </div>
      </div>

      <div className="row steps-details">
        <div className="col-md-4 col-sm-12">
          <div className="h1 text-ternary">01</div>
          <h3 className={`${extraDetails && "text-secondary"}`}>Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices
            for them. There are new coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="h1 text-ternary">02</div>
          <h3 className={`${extraDetails && "text-secondary"}`}>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="h1 text-ternary">03</div>
          <h3 className={`${extraDetails && "text-secondary"}`}>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
      </div>

      {extraDetails && (
        <div className="row">
          <div className="col-12">
            <Link to="/create-plan" className="btn btn-primary">
              Create your plan
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
