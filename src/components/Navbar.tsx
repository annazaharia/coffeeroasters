import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="./logo.png" />
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create-plan" className="nav-link">
                  Create your plan
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
