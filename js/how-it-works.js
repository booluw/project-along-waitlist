const pills = document.querySelectorAll(".pill");
const activePill = document.querySelector(".pill--active");

export const showActivePill = function (element = activePill) {
  const parentBoard = document.querySelector(".board-container").children;

  const activeBoard = document.querySelector(
    `[data-for='${element.textContent}']`
  );

  for (let index = 0; index < parentBoard.length; index++) {
    parentBoard[index].classList.remove("board--active");
  }
  activeBoard.classList.add("board--active")
};

export const changePill = function (element) {
  const parentChildren = document.querySelector(".pill-group").children;
  for (let index = 0; index < parentChildren.length; index++) {
    parentChildren[index].classList.remove("pill--active")
  }
  element.classList.add("pill--active");
  showActivePill(element);
}
