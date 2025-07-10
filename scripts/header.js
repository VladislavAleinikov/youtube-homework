const headerIcons = document.querySelector(".header__icons");
const headerShowMoreButton = document.querySelector(".header__show-more");

headerShowMoreButton.addEventListener("click", (e) => {
  e.preventDefault();
  headerIcons.classList.toggle("icons--show")
})