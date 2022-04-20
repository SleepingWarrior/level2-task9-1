import React from "react";

function Nav_btns() {
  return (
    <div className="right-btns">
      <form className="form">
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
        <button type="button" className="btn btn-outline-light">
          Login
        </button>
        <button type="button" className="btn btn-warning">
          Sign-up
        </button>
    </div>
  );
}

export default Nav_btns;
