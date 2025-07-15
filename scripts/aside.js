const aside = document.querySelector(".aside");
const menuButton = document.querySelector(".header__menu");

menuButton.addEventListener("click", () => {
  aside.classList.toggle("aside--show");
})