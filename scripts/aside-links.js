const asideLinks = document.querySelector(".aside__links:not(.links-main)");
const showMoreButton = document.querySelector(".aside__show-more");

showMoreButton.addEventListener("click", (e) => {
  e.preventDefault();

  asideLinks.classList.toggle("aside__links--show");
  showMoreButton.classList.toggle("aside__show-more--active");
})