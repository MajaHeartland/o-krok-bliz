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
// rolloutButton.addEventListener("click", show_hide);

/*  toggle navbar visibility */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let navbar = document.getElementById("navbar");
  let currentScrollPos = window.pageYOffset;
  if (window.matchMedia("(min-width: 1280px)").matches) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-148px";
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


window.addEventListener("DOMContentLoaded", (event) => {
  handleCarouselPreviewText()
});

const reviewsList = Array.from(document.getElementsByClassName('item-carousel'))
const originalReviewTextArr = []

// carousel
function handleCarouselPreviewText() {
  reviewsList.forEach((el, index) => {
  const reviewContent = el.getElementsByClassName('item__carousel-review')[0]
  originalReviewTextArr.push(reviewContent.innerHTML)
  
  setTimeout(() => {
      const isTextClamped = elm => elm.scrollHeight > elm.clientHeight

      if (!isTextClamped(reviewContent)) {
        return
      } else {
        const newEl = document.createElement('span')
        newEl.textContent = 'Zobrazit více'
        newEl.setAttribute('class', 'item__show-more')
        newEl.setAttribute('id', index)
        newEl.addEventListener("click", (e) => emitCustomEventFromClickReview(e, index))
        el.appendChild(newEl)
        // reviewContent.style.height = '200px';
      }
    }, 1000);
  })
}


function emitCustomEventFromClickReview(e, index) {
  const elByIndex = reviewsList[e.target.id]
  const avatar = elByIndex.getElementsByClassName('item__carousel-avatar')[0]?.src ?? ''
  const name = elByIndex.getElementsByClassName('item__carousel-heading')[0].textContent
  const jobPosition = elByIndex.getElementsByClassName('item__carousel-subtitle')[0].textContent
  const text = originalReviewTextArr[index]
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