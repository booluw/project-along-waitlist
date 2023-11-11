import { ripple } from "./js/microinteractions";
import { fixHeader } from "./js/header";
import { showActivePill, changePill } from "./js/how-it-works";

import "./main.scss";

const headerBtn = document.querySelector(".header__button");
const pills = document.querySelectorAll(".pill");

headerBtn.addEventListener("mouseover", () => ripple(headerBtn));
pills.forEach((el) => {
  el.addEventListener("click", () => changePill(el))
})

fixHeader();
showActivePill();