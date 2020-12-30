import "./Button.scss";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, type, text }) => {
  return (
    <div className="btn-container">
      <Link to={path} className={`btn btn--${type}`}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
