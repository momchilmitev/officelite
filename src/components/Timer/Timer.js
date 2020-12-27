import React from "react";

const Timer = () => {
  return (
    <div className="timer">
      <h2 className="timer__start-date">Coming 4 Nov 2020</h2>
      <div className="timer__countdown">
        <div className="timer__days">3</div>
        <div className="timer__hours">3</div>
        <div className="timer__minutes">34</div>
        <div className="timer__seconds">32</div>
      </div>
    </div>
  );
};

export default Timer;
