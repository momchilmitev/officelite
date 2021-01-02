import "./Info.scss";
import React from "react";
import Button from "../Button/Button";

const Info = ({ title, description, classModifier }) => {
  return (
    <section className={`info ${classModifier ? "info" + classModifier : ""}`}>
      <h1 className="info__title">{title}</h1>
      <p className="info__description">{description}</p>
      <Button path="/sign-up" type="primary" text="Get Started" />
    </section>
  );
};

export default Info;
