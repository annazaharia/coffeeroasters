import { Link } from "react-router-dom";

export default function HeroWithButton() {
  return (
    <section className="container rounded-3 hero-with-button">
      <div className="row hero-text">
        <div className="col-12">
          <h1>
            Great coffee <br />
            made simple.
          </h1>
          <p>
            Start your mornings with the world's best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </div>
      </div>
      <div className="row>">
        <div className="col-12">
          <Link to="/create-plan" className="btn btn-primary">
            Create your plan
          </Link>
        </div>
      </div>
    </section>
  );
}
