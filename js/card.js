import gsap from "gsap"

export const cardHover = function (element) {

  const card = element;
  const cardImg = element.firstElementChild;
  const cardText = card.querySelector('.card__text');

  const hover = function () {
    gsap.to(cardImg, {
      padding: '5rem 10rem',
      duration: .1,
      ease: 'sine.out'
    })
      gsap.to(cardText, {
      opacity: 1,
      duration: .1,
    })
  }

  const release = function () {
    gsap
      .to(cardImg, {
        padding: "7rem 10rem",
        duration: 0.1,
        ease: "sine.in",
      })
      gsap.to(cardText, {
        opacity: 0,
        duration: .1,
      });
  }

  element.addEventListener("mouseover", () => hover());
  element.addEventListener("mouseout", () => release());
}