//import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div className="navLinks">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="nav-link text-white">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLink;
