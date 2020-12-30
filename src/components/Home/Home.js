import "./Home.scss";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Charts from "../Charts/Charts";
import Info from "../Info/Info";
import Button from "../Button/Button";
import CardList from "../CardList/CardList";
import Countdown from "../Countdown/Countdown";

const title = "A simple solution to complex tasks is coming soon";
const description = `Say goodbye to inefficient juggling of multiple apps, teams, and
projects. Officelite is the new collaboration platform built with an
intuitive interface to improve productivity.`;

const Home = () => {
  return (
    <>
      <Header>
        <Logo />
        <Charts />
        <Info title={title} description={description} />
        <Button path="/sign-up" type="primary" text="Get Started" />
      </Header>
      <CardList />
      <Footer>
        <Countdown year="2021" month="1" day="27" />
        <Button path="/sign-up" type="primary" text="Get Started" />
      </Footer>
    </>
  );
};

export default Home;
