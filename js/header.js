const pageHeader = document.querySelector('header')

export const fixHeader = function () {
  window.onscroll = () => {
    if (document.documentElement.scrollTop >= 20) {
      pageHeader.classList.add("header--scroll");
    } else {
      pageHeader.classList.remove("header--scroll");
    }
  };
}