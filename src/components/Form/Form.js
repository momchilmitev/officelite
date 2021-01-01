import "./Form.scss";
import React, { useState } from "react";
import Select from "../Select/Select";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const company = e.target.company.value;

    if (!name && !email && !phone && !company) {
      setErrors({
        name: true,
        email: true,
        phone: true,
        company: true,
      });
    }
  };

  return (
    <form className="form" onSubmit={validateForm}>
      <div
        className={
          errors["name"]
            ? "form__element--container form__element--container-error"
            : "form__element--container"
        }
      >
        <input
          type="text"
          placeholder="Name"
          className={
            errors["name"]
              ? "form__element form__element--error"
              : "form__element"
          }
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        className={
          errors["email"]
            ? "form__element--container form__element--container-error"
            : "form__element--container"
        }
      >
        <input
          type="email"
          placeholder="Email Address"
          className={
            errors["email"]
              ? "form__element form__element--error"
              : "form__element"
          }
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Select />
      <div
        className={
          errors["phone"]
            ? "form__element--container form__element--container-error"
            : "form__element--container"
        }
      >
        <input
          type="tel"
          placeholder="Phone Number"
          className={
            errors["phone"]
              ? "form__element form__element--error"
              : "form__element"
          }
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div
        className={
          errors["company"]
            ? "form__element--container form__element--container-error"
            : "form__element--container"
        }
      >
        <input
          type="text"
          placeholder="Company"
          className={
            errors["company"]
              ? "form__element form__element--error"
              : "form__element"
          }
          value={company}
          name="company"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <button className="btn btn--long">Get on the list</button>
    </form>
  );
};

export default Form;
