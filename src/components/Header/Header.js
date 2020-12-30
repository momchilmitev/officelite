import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <header
      className={`header ${
        props.classModifier ? "header" + props.classModifier : ""
      }`}
    >
      <div className="container">{props.children}</div>
    </header>
  );
};

export default Header;
