const pageHeader = document.querySelector('header')

export const fixHeader = function {
  window.onscroll = () => {
    if (document.documentElement.scrollTop >= 10) {
      pageHeader.classList.add("header--bg-white");
    } else {
      pageHeader.classList.remove("header--bg-white");
    }
  };
}