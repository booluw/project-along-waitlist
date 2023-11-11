import anime from 'animejs'
import Letterize from 'letterizejs';

export const wobbleText = function (element) {

  const text = new Letterize({
    targets: element
  })

  const animation = anime.timeline({
    targets: text.listAll,
    delay: anime.stagger(50),
  })

  animation.add({ opacity: 0 }).add({ opacity: 1 });
}

export const ripple = function (element) {

  const animation = anime.timeline({
    targets: element,
    easing: "linear",
    delay: -20
  });

  animation
    .add({
      outlineOffset: "2px",
      scale: 0.95,
    })
    .add({
      outlineOffset: 0,
      scale: 1,
    });
}