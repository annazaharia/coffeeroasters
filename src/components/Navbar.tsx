import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container p-0">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="Logo" />
          </Link>
          <button
            className={`navbar-toggler ${!isCollapsed ? "active" : ""}`}
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-close">×</span>
          </button>

          <div className={`mobile-menu ${!isCollapsed ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={toggleNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link" onClick={toggleNavbar}>
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create-plan" className="nav-link" onClick={toggleNavbar}>
                  Create your plan
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={`collapse navbar-collapse justify-content-end`} id="navbarNav">
            <ul className="navbar-nav">
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
        </div>
      </nav>
    </header>
  );
}
