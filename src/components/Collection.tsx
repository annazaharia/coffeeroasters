export default function Collection() {
  return (
    <section className="container products-section">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <h2 className="text-gradient">our collection</h2>
        </div>
      </div>
      <div className="row">
        <div className="card card-product col-lg-3 col-md-12 col-sm-3">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <img src="./gran-espresso.png" className="card-img-top" />
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="card-body">
                <h4 className="card-title">Gran Espresso</h4>
                <p className="card-text">
                  Light and flavorful blend with cocoa and black pepper for an intense experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-product col-lg-3 col-md-12 col-sm-3">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <img src="./planalto.png" className="card-img-top" />
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="card-body">
                <h4 className="card-title">Planalto</h4>
                <p className="card-text">
                  Brazilian dark roast with rich and velvety body, and hints of friuts and nuts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-product col-lg-3 col-md-12 col-sm-3">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <img src="./piccollo.png" className="card-img-top" />
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="card-body">
                <h4 className="card-title">Piccollo</h4>
                <p className="card-text">Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-product col-lg-3 col-md-12 col-sm-3">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <img src="./danche.png" className="card-img-top" />
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="card-body">
                <h4 className="card-title">Danche</h4>
                <p className="card-text">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
