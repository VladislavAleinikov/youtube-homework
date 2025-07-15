const navbarPopup = document.querySelector(".navbar__popup");
const navbarShowButton = document.querySelector(".navbar__show-more");

navbarShowButton.addEventListener("click", (e) => {
  navbarPopup.classList.toggle("navbar__popup--show");
  navbarShowButton.classList.toggle("navbar__show-more--active")
})