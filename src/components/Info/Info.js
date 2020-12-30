import "./Info.scss";
import React from "react";

const Info = ({ title, description, classModifier }) => {
  return (
    <section className={`info ${classModifier ? "info" + classModifier : ""}`}>
      <h1 className="info__title">{title}</h1>
      <p className="info__description">{description}</p>
    </section>
  );
};

export default Info;
