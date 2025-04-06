import Authentication from "../components/Authentication";
import CheckoutDetails from "../components/CheckoutDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="container checkout-section">
        <div className="row">
          <div className="col-lg-6 checkout-details">
            <CheckoutDetails />
          </div>

          <div className="col-lg-6 authentication">
            <Authentication />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
