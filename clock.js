"use strict";

// Time
const hourHtml = document.querySelector(".hour");
const minHtml = document.querySelector(".min");
const secHtml = document.querySelector(".sec");

// Date
const dayHtml = document.querySelector(".day");
const monthHtml = document.querySelector(".month");
const yearHtml = document.querySelector(".year");
const dateHtml = document.querySelector(".date");

// Page
const mainPage = document.querySelector(".main-page");

// Button
const btnColor = document.querySelector(".btn");

// Slash
const slash = "/";

// Colors
const blue = "#3de2ff";
const white = "#ddd";

// Weekdays
const weekdays = [...document.querySelector(".weekdays").children];

// Clock
const clockInit = function () {
  const date = new Date();

  // Clock setup
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourHtml.textContent = h;
  minHtml.textContent = m;
  secHtml.textContent = s;

  // Date setup
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  dayHtml.textContent = day;
  monthHtml.textContent = month;
  yearHtml.textContent = year;

  // Weekday setup
  let weekday = date.getDay();
  weekdays[weekday].classList.add("colored");
};
setInterval(clockInit, 1000);

////////////////////////////////////////
const root = document.documentElement;

let counter = 0;
btnColor.addEventListener("click", function (e) {
  e.preventDefault();
  counter++;

  let date = new Date();
  let weekday = date.getDay();

  if (counter % 2 === 0) {
    root.style.setProperty("--mainColor", blue);
    root.style.setProperty("--mainBackground", "#222");
    weekdays[weekday].classList.remove("colored2");
  } else {
    root.style.setProperty("--mainColor", "#333");
    root.style.setProperty("--mainBackground", white);
    weekdays[weekday].classList.add("colored2");
  }
});
////////////////////////////////////////////////////////
