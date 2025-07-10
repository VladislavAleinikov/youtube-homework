const asideLinks = document.querySelector(".aside__links:not(.links-main)");
const asideShowMoreButton = document.querySelector(".aside__show-more");

asideShowMoreButton.addEventListener("click", (e) => {
  e.preventDefault();

  asideLinks.classList.toggle("aside__links--show");
  asideShowMoreButton.classList.toggle("aside__show-more--active");
})