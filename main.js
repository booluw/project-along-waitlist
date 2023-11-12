import { ripple } from "./js/microinteractions";
import { fixHeader } from "./js/header";
import { showActivePill, changePill, scrollToView } from "./js/how-it-works";

import "./main.scss";

const headerBtn = document.querySelector(".header__button");
const pills = document.querySelectorAll(".pill");
const jumboBtn = document.querySelector(".jumbotron__button--absolute");

headerBtn.addEventListener("mouseover", () => ripple(headerBtn));
jumboBtn.addEventListener("click", () => scrollToView());
pills.forEach((el) => {
  el.addEventListener("click", () => changePill(el))
})

fixHeader();
showActivePill();