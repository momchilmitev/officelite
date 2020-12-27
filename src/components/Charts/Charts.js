import "./Charts.css";
import React from "react";
import charts from "./illustration-charts.svg";

const Charts = () => {
  return (
    <section className="charts">
      <img className="charts__image" src={charts} alt="charts illustration" />
    </section>
  );
};

export default Charts;
