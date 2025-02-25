export default function ChooseUs() {
  return (
    <section className="container features-section">
      <div className="row rounded-3">
        <div className="features-headline">
          <h2>Why choose us?</h2>
          <p>
            A large of our role is choosing which particular coffees will be
            featured <br />
            in our range. This means working closely with the best coffee
            growers to give <br />
            you a more impactful experience on every level
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card feature-card">
            <img src="./coffee-bean.svg" />
            <div className="card-body">
              <h4 className="card-title">Best quality</h4>
              <p className="card-text">
                Discover an endless variety of the world's best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card feature-card">
            <img src="./shape-benefits.svg" />
            <div className="card-body">
              <h4 className="card-title">Exclusive benefits</h4>
              <p className="card-text">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card feature-card">
            <img src="./shape-car.svg" />
            <div className="card-body">
              <h4 className="card-title">Free shipping</h4>
              <p className="card-text">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
