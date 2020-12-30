import "./Card.scss";
import React from "react";
import Button from "../Button/Button";

const Card = ({ plan, price, users, details }) => {
  return (
    <article className={plan === "Pro" ? "card card--blue" : "card"}>
      <h2 className="card__plan">{plan}</h2>
      <h1 className="card__price">{price}</h1>
      <h3 className="card__users-count">{users}</h3>
      <div className="card__details">
        <p>{details[0]}</p>
        <p>{details[1]}</p>
        <p>{details[2]}</p>
      </div>
      <Button
        path="/sign-up"
        type={plan === "Pro" ? "card--white" : "card--blue"}
        text="Try for Free"
      />
    </article>
  );
};

export default Card;
