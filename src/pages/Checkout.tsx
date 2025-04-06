import { NavLink, Outlet, useLocation } from "react-router-dom";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const location = useLocation();
  const isIndex = location.pathname === '/checkout';

  return (
    <>
      <Navbar />
      <section className="container checkout-section">
        <div className="row">
          <div className="col-lg-6 checkout-details">
            <CheckoutDetails />
          </div>

          <div className="col-lg-6 authentication">
            <ul className="nav nav-pills nav-justified mb-3" role="tablist">
              <li className="nav-item" role="presentation">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link ${isActive || isIndex ? 'active' : ''}`
                  } 
                  to="login" 
                  role="tab"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="register" 
                  role="tab"
                >
                  Register
                </NavLink>
              </li>
            </ul>

            <div className="tab-content">
              <Outlet context={{ isIndex }} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}