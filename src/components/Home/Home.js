import "./Home.css";
import React from "react";
import Logo from "../Logo/Logo";
import Charts from "../Charts/Charts";
import Info from "../Info/Info";
import Button from "../Button/Button";
import CardList from "../CardList/CardList";
import Countdown from "../Countdown/Countdown";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Logo />
          <Charts />
          <Info />
          <Button path="/" type="primary" text="Get Started" />
        </div>
      </header>
      <CardList />
      <footer className="footer">
        <div className="container">
          <Countdown year="2020" month="12" day="30" />
          <Button path="/" type="primary" text="Get Started" />
        </div>
      </footer>
    </>
  );
};

export default Home;
