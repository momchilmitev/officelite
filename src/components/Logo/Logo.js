import "./Logo.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Logo = ({ classModifier }) => {
  return (
    <section className={`logo ${classModifier ? "logo" + classModifier : ""}`}>
      <Link to="/">
        <img className="logo__image" src={logo} alt="logo" />
      </Link>
    </section>
  );
};

export default Logo;
