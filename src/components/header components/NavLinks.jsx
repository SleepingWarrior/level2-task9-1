import React from 'react'

function NavLink() {
  return (
    <div className="navLinks">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href={" "} className="nav-link text-secondary">
            {" "}
            Home{" "}
          </a>
        </li>
        <li>
          <a href={" "} className="nav-link text-white">
            Contacts
          </a>
        </li>
        <li>
          <a href={" "} className="nav-link text-white">
            Services
          </a>
        </li>
        <li>
          <a href={" "} className="nav-link text-white">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLink;
