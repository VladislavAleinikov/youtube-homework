document.querySelectorAll(".slider").forEach(addSliderEvents);

function addSliderEvents(slider) {
  const sliderFor = slider.dataset.sliderFor;
  const controls = document.getElementById(`${sliderFor}-controls`);
  const slides = slider.children.length;
  const slideWidth = slider.classList.contains("slider--wide") ? 580 : 290;
  let currentSlide = 0;

  const changeSlide = () => {
    slider.style.left = `${slideWidth * (-currentSlide)}px`;
  };

  controls.firstElementChild.addEventListener("click", (e) => {
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides - 1;
    };
    changeSlide();
  });

  controls.lastElementChild.addEventListener("click", (e) => {
    currentSlide++;
    if (slides - 1 < currentSlide) {
      currentSlide = 0;
    };
    changeSlide();
  });
}