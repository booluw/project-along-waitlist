import gsap from "gsap";

const activePill = document.querySelector(".pill--active");

export const showActivePill = function (element = activePill) {
  const parentBoard = document.querySelector(".board-container").children;

  const activeBoard = document.querySelector(
    `[data-for='${element.textContent}']`
  );

  for (let index = 0; index < parentBoard.length; index++) {
    gsap.fromTo(
      parentBoard[index],
      {
        display: "none",
        opacity: 0.7,
        duration: 3,
        translateY: "-10px",
        ease: "sine.out",
      },
      {
        opacity: 1,
        translateY: "0px",
        duration: .3,
      }
    );
  }
  gsap.fromTo(
    activeBoard,
    {
      duration: 1,
      opacity: 0.7,
      translateY: "-10px",
      ease: "sine.in",
    },
    {
      opacity: 1,
      display: "flex",
      translateY: "0px",
      duration: .3,
    }
  );
};

export const changePill = function (element) {
  const parentChildren = document.querySelector(".pill-group").children;
  for (let index = 0; index < parentChildren.length; index++) {
    parentChildren[index].classList.remove("pill--active")
  }
  element.classList.add("pill--active");
  showActivePill(element);
}

export const scrollToView = function () {
  document.querySelector('[name="how-it-works"]').scrollIntoView({
    behavior: 'smooth'
  })
}
