import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer
      className={`footer ${
        props.classModifier ? "footer" + props.classModifier : ""
      }`}
    >
      <div className="container">{props.children}</div>
    </footer>
  );
};

export default Footer;
