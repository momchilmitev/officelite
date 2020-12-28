import "./Countdown.css";
import React, { useState, useEffect } from "react";

const Countdown = ({ year, month, day }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let endDate = new Date(year, month - 1, day);
  let diff = Math.abs((endDate - new Date()) / 1000);
  const [seconds, setSecondes] = useState(diff);

  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSecondes(seconds - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [seconds]);

  return (
    <div className="countdown">
      <h2 className="countdown__end-date">
        Coming{" "}
        <span>{`${endDate.getDate()} ${
          months[endDate.getMonth()]
        } ${endDate.getFullYear()}`}</span>
      </h2>
      <div className="countdown__elements">
        <div className="countdown__element countdown--days">
          <span id="days">{d}</span> days
        </div>
        <div className="countdown__element countdown--hours">
          <span id="hours">{h < 10 ? `0${h}` : h}</span> hours
        </div>
        <div className="countdown__element countdown--minutes">
          <span id="minutes">{m < 10 ? `0${m}` : m}</span> min
        </div>
        <div className="countdown__element countdown--seconds">
          <span id="seconds">{s < 10 ? `0${s}` : s}</span> sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
