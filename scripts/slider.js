document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slider").forEach(addSliderEvents);
});

function addSliderEvents(slider) {
  const sliderFor = slider.dataset.sliderFor;
  const controls = document.getElementById(`${sliderFor}-controls`);
  const slideWidth = slider.classList.contains("slider--wide") ? 580 : 290;
  const slides = slider.children.length - Math.floor(slider.offsetWidth / slideWidth);
  let currentSlide = 0;

  const changeSlide = () => {
    slider.style.left = `${slideWidth * (-currentSlide)}px`;
  };

  controls.firstElementChild.addEventListener("click", (e) => {
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides;
    };
    changeSlide();
  });

  controls.lastElementChild.addEventListener("click", (e) => {
    currentSlide++;
    if (slides < currentSlide) {
      currentSlide = 0;
    };
    changeSlide();
  });
}