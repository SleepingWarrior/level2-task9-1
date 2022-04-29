import React from "react";
import NavLink from "./NavLinks";
import NavBtns from "./Nav_btns";

function Header() {
  return (
    <div className="App-header">
      <header className="header bg-dark text-white">
        <NavLink />
        <NavBtns />
      </header>
    </div>
  );
}

export default Header;
