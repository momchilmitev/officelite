import React from "react";
import "./SignUp.scss";

import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import Countdown from "../Countdown/Countdown";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

const title = "Work smarter. Save time.";
const description = `Easily manage your projects.
 Get on the list and receive in-app perks available only to early subscribers.
 We are moving into final development and getting ready for official launch soon.`;

const SignUp = (props) => {
  return (
    <>
      <Header classModifier="--sign-up">
        <Logo />
        <Info
          title={title}
          description={description}
          classModifier="--sign-up"
        />
        <Countdown year="2021" month="1" day="27" classModifier="--sign-up" />
      </Header>
      <Form classModifier="--sign-up" />
      <Footer classModifier="--sign-up" />
    </>
  );
};

export default SignUp;
