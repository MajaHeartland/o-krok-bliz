const slider = document.querySelector(".slider-container");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", (e) => {
  isDown = false;
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

/*pagination*/

const pages = document.querySelectorAll(".page");
const sliderContainer = document.querySelector(".slider-container");

//external functions

const removeActiveClass = () => {
  pages.forEach((page) => page.classList.remove("active-page"));
};

const addActiveClass = (element) => {
  element.classList.add("active-page");
};

//clicking function

const handleClickPages = (e) => {
  removeActiveClass();
  e.target.classList.add("active-page");
  const clickedPage = e.target.getAttribute("data-page");

  const targetedElement = document.querySelector(
    `[data-slide="${clickedPage}"]`
  );
  const positionCard = targetedElement.offsetLeft;

  if (clickedPage === "1") {
    sliderContainer.scrollLeft = 0;
  } else {
    sliderContainer.scrollLeft = 0 + positionCard;
  }
};

pages.forEach((page) => page.addEventListener("click", handleClickPages));

//scrolling function

const handleScroll = (e) => {
  const fullWidth = e.target.scrollWidth;
  const scrollPos = e.target.scrollLeft;
  const scrolledPercent = Math.round((scrollPos / fullWidth) * 100);

  if (scrolledPercent < 25) {
    removeActiveClass();
    const targetPage = document.querySelector(`[data-page="1"]`);
    addActiveClass(targetPage);
  }
  if (scrolledPercent >= 25) {
    removeActiveClass();
    const targetPage = document.querySelector(`[data-page="2"]`);
    addActiveClass(targetPage);
  }

  if (scrolledPercent >= 50) {
    removeActiveClass();
    const targetPage = document.querySelector(`[data-page="3"]`);
    addActiveClass(targetPage);
  }

  //for ipads
  if (fullWidth > 1500) {
    if (scrolledPercent >= 56) {
      removeActiveClass();
      const targetPage = document.querySelector(`[data-page="4"]`);
      addActiveClass(targetPage);
    }
  }

  if (scrolledPercent >= 68) {
    removeActiveClass();
    const targetPage = document.querySelector(`[data-page="4"]`);
    addActiveClass(targetPage);
  }
};

sliderContainer.addEventListener("scroll", handleScroll);
