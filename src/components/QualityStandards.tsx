export default function QualityStandards() {
  return (
    <section className="container rounded-3 quality-standards">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <div className="quality-description">
            <h2>Uncompromising quality</h2>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing , we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <img src="quality.png" className="quality-img rounded-3" />
        </div>
      </div>
    </section>
  );
}
