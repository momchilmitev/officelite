import "./CardList.css";
import React from "react";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <main className="cards">
      <div className="container">
        <Card
          plan="Basic"
          price="Free"
          users="Up to 5 users for free"
          details={[
            "Basic document collaboration",
            "2 GB storage",
            "Great security and support",
          ]}
        />
        <Card
          plan="Pro"
          price="$9.99"
          users="Per user, billed monthly"
          details={[
            "All essential integrations",
            "50 GB storage",
            "More control and insights",
          ]}
        />
        <Card
          plan="Ultimate"
          price="$19.99"
          users="Per user, billed monthly"
          details={["Robust work management", "100 GB storage", "VIP support"]}
        />
      </div>
    </main>
  );
};

export default CardList;
