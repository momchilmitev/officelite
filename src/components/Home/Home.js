import "./Home.css";
import React from "react";
import Logo from "../Logo/Logo";
import Charts from "../Charts/Charts";
import Info from "../Info/Info";
import Button from "../Button/Button";
import CardList from "../CardList/CardList";
import Timer from "../Timer/Timer";

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
          <Timer />
          <Button path="/" type="primary" text="Get Started" />
        </div>
      </footer>
    </>
  );
};

export default Home;
