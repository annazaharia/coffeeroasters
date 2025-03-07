import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="row align-items-center">
        <div className="col-md-3">
          <img
            src="./logo-footer.png"
            alt="Coffee Roasters"
            style={{ height: "26px" }}
          />
        </div>
        <div className="col-md-5">
          <ul className="nav justify-content-center gap-3">
            <li className="nav-item">
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="footer-link">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create-plan" className="footer-link">
                Create your plan
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-center text-md-end social-icons">
          <NavLink to="" className="footer-icons">
            <i className="fa fa-facebook-official"></i>
          </NavLink>
          <NavLink to="" className="footer-icons">
            <i className="fa fa-twitter"></i>
          </NavLink>
          <NavLink to="" className="footer-icons">
            <i className="fa fa-instagram"></i>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
