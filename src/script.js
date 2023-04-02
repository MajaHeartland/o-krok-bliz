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
