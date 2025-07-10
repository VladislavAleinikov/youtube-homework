const navbarList = document.querySelector(".navbar__list");
const navbarShowButton = document.querySelector(".navbar__show-more");

navbarShowButton.addEventListener("click", (e) => {
  navbarList.classList.toggle("navbar__list--show");
  navbarShowButton.classList.toggle("navbar__show-more--active")
})