import "./Select.scss";
import React, { useState } from "react";

const Select = () => {
  const [plans, setPlans] = useState([
    { name: "Basic Pack", price: 0, selected: true },
    { name: "Pro Pack", price: 9.99, selected: false },
    { name: "Ultimate Pack", price: 19.99, selected: false },
  ]);
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(plans[0]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleSelection = (name) => {
    setPlans(
      plans.map((plan) => {
        if (plan.name === name) {
          setSelected(plan);
          return { ...plan, selected: true };
        } else {
          return { ...plan, selected: false };
        }
      })
    );
    toggleOptions();
  };

  function renderContent() {
    return plans.map((plan) => {
      return (
        <div
          key={plan.price}
          className={
            plan.selected === true
              ? "select__option select__option--selected"
              : "select__option"
          }
          onClick={() => toggleSelection(plan.name)}
        >
          <span className="option--plan">{plan.name}</span>
          {plan.price ? `$${plan.price}` : "Free"}
        </div>
      );
    });
  }

  return (
    <div className="select">
      <div
        className="select__option select__option--initial"
        onClick={toggleOptions}
      >
        <span className="option--plan"> {selected.name}</span>
        {selected.price ? `$${selected.price}` : "Free"}
      </div>
      {showOptions ? (
        <div className="select__options">{renderContent()}</div>
      ) : null}
    </div>
  );
};

export default Select;
