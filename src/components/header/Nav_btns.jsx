import React from "react";
import { Link } from "react-router-dom";

function Nav_btns() {
  return (
    <div className="right-btns">
      <form className="form">
        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
      </form>

      <Link to="/login">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={(e) => {
            console.log("clicked");
          }}
        >
          Login
        </button>
      </Link>

      <Link to="/signup">
        <button
          type="button"
          className="btn btn-warning"
          onClick={(e) => {
            console.log("clicked");
          }}
        >
          Sign-up
        </button>
      </Link>
    </div>
  );
}

export default Nav_btns;
