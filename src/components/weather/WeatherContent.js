import React, { useRef } from 'react';

const weekFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function WeatherContent({ weather, temp, week, index }) {
  const clickRef = useRef();
  function weatherClick() {
    const $ul = clickRef.current.parentNode;
    const $active = $ul.previousElementSibling;
    const $detail = $active.previousElementSibling;

    const $active_i = $active.querySelector("i");
    const $active_p = $active.querySelector("p");
    const $detail_description = $detail.querySelector(".description");
    const $city_week = $detail.querySelector(".city > span");

    $ul.querySelector(".active").classList.remove("active");
    clickRef.current.className = "active";
    if (index === 0) {
      $detail_description.textContent = $detail_description.getAttribute("data-description");
      $active_i.className = $active_i.getAttribute("data-icon");
      $active_p.innerHTML = `${$active_p.getAttribute("data-temp")}° <span></span>`;
      $city_week.textContent = ""
    } else {
      $active_i.className = "wi " + weather[0].main;
      $active_p.innerHTML = `${Math.round(temp.max)}° <span>${Math.round(temp.min)}°</span>`;
      $detail_description.textContent = `${weather[0].description}`
      $city_week.textContent = weekCheck(week);
    }
    function weekCheck(week) {
      switch (week) {
        case "SUN":
          return weekFull[0];
        case "MON":
          return weekFull[1]; 
        case "TUE":
          return weekFull[2]; 
        case "WED":
          return weekFull[3]; 
        case "THU":
          return weekFull[4]; 
        case "FRI":
          return weekFull[5]; 
        case "SAT":
          return weekFull[6]; 
        default:
          return week
      }
    }
  }
  return (
    <li className={ "weather-content" + (index === 0 && " active") } ref={ clickRef } onClick={weatherClick}>
      <p className="day-name">{week}</p>
      <div className="day">
        <i className={"wi " + weather[0].main}></i>
        <p className="temp">{ Math.round(temp.max) }° <span>{ Math.round(temp.min) }°</span></p>
      </div>
    </li>
  )
}