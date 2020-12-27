import "./Logo.css";
import React from "react";
import logo from "./logo.svg";

const Logo = () => {
  return (
    <section className="logo">
      <img className="logo__image" src={logo} alt="logo" />
    </section>
  );
};

export default Logo;
