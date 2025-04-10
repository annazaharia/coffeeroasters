import { NavLink, Outlet, useLocation } from "react-router-dom";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import { useAuthContext } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const location = useLocation();
  const isLogin = location.pathname === "/checkout";
  const { user, isAuthenticated, logout } = useAuthContext();

  return (
    <>
      <Navbar />
      <section className="container checkout-section">
        <div className="row">
          <div className="col-lg-6 checkout-details">
            <CheckoutDetails />
          </div>

          {isAuthenticated && (
            <div className="col-lg-6 authentication">
              <p className="h2 text-secondary mb-4 message-auth">
                Welcome, <br /> {user?.firstName + " " + user?.lastName}!
              </p>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={() => logout()}>
                  Logout
                </button>
              </div>
            </div>
          )}

          {!isAuthenticated && (
            <div className="col-lg-6 authentication">
              <ul className="nav nav-pills nav-justified mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive || isLogin ? "active" : ""}`}
                    to="login"
                    role="tab"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item" role="presentation">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                    to="register"
                    role="tab"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>

              <div className="tab-content">
                <Outlet />
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
