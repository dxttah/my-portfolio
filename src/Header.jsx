import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      {!props.navValue && (
        <nav>
          <h1 className="logo">T.C</h1>
        </nav>
      )}
      <div className="stack_cont">
        {props.navValue && (
          <Link to="/" className="backBtn">
            ← Go back
          </Link>
        )}
        {!props.navValue && (
          <div className="stack">frontend&nbsp; developer</div>
        )}
      </div>
    </div>
  );
}

export default Header;
