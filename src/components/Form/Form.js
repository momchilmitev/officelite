import "./Form.scss";
import React, { useState } from "react";
import Select from "../Select/Select";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    console.log("Valid");
  };

  return (
    <form className="form" onSubmit={validateForm}>
      <input
        type="text"
        placeholder="Name"
        className="form__element"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="form__element"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Select />
      <input
        type="tel"
        placeholder="Phone Number"
        className="form__element"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        className="form__element"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button className="btn btn--long">Get on the list</button>
    </form>
  );
};

export default Form;
