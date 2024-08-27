import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css";

function Header() {
  return (
    <div className="main">
      <nav>
        <Link to={"/"}>
          <div className="logo">
            <h1>React Kart</h1>
          </div>
        </Link>
        <div className="tabs">
          <div>
            <Link to={"/"}>Home</Link>
          </div>

          <div>
            <Link to={"/cart"}>Cart</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
