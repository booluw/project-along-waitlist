// import { ripple } from "./js/microinteractions";
import { fixHeader } from "./js/header";
import { showActivePill, changePill, scrollToView } from "./js/how-it-works";

import "./main.scss";
import { cardHover } from "./js/card";
import { handleForm } from "./js/form";

// const headerBtn = document.querySelector(".header__button");
const pills = document.querySelectorAll(".pill");
const jumboBtn = document.querySelector(".jumbotron__button--absolute");
const cards = document.querySelectorAll(".card");
const form = document.querySelectorAll(".form");

// headerBtn.addEventListener("mouseover", () => ripple(headerBtn));
jumboBtn.addEventListener("click", () => scrollToView());
pills.forEach((el) => {
  el.addEventListener("click", () => changePill(el))
})
cards.forEach((el) => {
  cardHover(el);
})
form.forEach((el) => {
  handleForm(el);
})

fixHeader();
showActivePill();