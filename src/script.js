const rolloutText = document.getElementById("rollout-text");
const rolloutButton = document.getElementById("poznej-me-vic-button");
const fading = document.getElementById("fade-out-text");

/* pojdme se poznat hide and show text */
function show_hide() {
  if (rolloutText.style.display === "none") {
    rolloutText.style.display = "block";
    fading.classList.remove("closed");
  } else {
    rolloutText.style.display = "none";
    fading.classList.add("closed");
  }
}
rolloutButton.addEventListener("click", show_hide);

/*  toggle navbar visibility */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let navbar = document.getElementById("navbar");
  let currentScrollPos = window.pageYOffset;
  if (window.matchMedia("(min-width: 1280px)").matches) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
  } else {
    navbar.classList.remove("large-screens");
  }
  prevScrollpos = currentScrollPos;
};

// dropdowns //
const items = document.querySelectorAll(".accordions");

function toggleDropdown() {
  this.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleDropdown));


// carousel
const reviewsList = Array.from(document.getElementsByClassName('item-carousel'))
reviewsList.forEach((el, index) => {
  const newEl = document.createElement('span')
  newEl.textContent = 'Zobrazit více'
  newEl.setAttribute('class', 'item__show-more')
  newEl.setAttribute('id', index)
  newEl.addEventListener("click", (e) => emitCustomEventFromClickReview(e))
  el.appendChild(newEl)
})

function emitCustomEventFromClickReview(e) {
  const elByIndex = reviewsList[e.target.id]
  const avatar = elByIndex.getElementsByClassName('item__carousel-avatar')[0]?.src ?? ''
  const name = elByIndex.getElementsByClassName('item__carousel-heading')[0].textContent
  const jobPosition = elByIndex.getElementsByClassName('item__carousel-subtitle')[0].textContent
  const text = elByIndex.getElementsByClassName('item__carousel-review')[0].textContent
  const event = new CustomEvent('showReviewModal', {
    bubbles: true,
    detail: { 
      review: {
        avatar,
        name,
        jobPosition,
        text
      }
    },
  });
  dispatchEvent(event)
}