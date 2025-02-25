export default function OrderSteps() {
  return (
    <section className="container how-it-works-section">
      <div className="row">
        <h2 className="h4">How it works</h2>
      </div>

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

      <div className="row steps-numbers">
        <div className="col-4">
          <div className="h1 text-ternary">01</div>
        </div>
        <div className="col-4">
          <div className="h1 text-ternary">02</div>
        </div>
        <div className="col-4">
          <div className="h1 text-ternary">03</div>
        </div>
      </div>

      <div className="row steps-details">
        <div className="col-4">
          <h3 className="text-secondary">Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="col-4">
          <h3 className="text-secondary">Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>

        <div className="col-4">
          <h3 className="text-secondary">Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary">Create your plan</button>
        </div>
      </div>
    </section>
  );
}
