const rolloutText = document.getElementById("rollout-text");
const rolloutButton = document.getElementById("poznej-me-vic-button");
const fading = document.getElementById("fade-out-text");

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
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos || currentScrollPos < 10) {
//     document.querySelector("nav").classList.remove("hidden");
//   } else {
//     document.querySelector("nav").classList.add("hidden");
//   }
//   prevScrollpos = currentScrollPos;
// };


// dropdowns //
const items = document.querySelectorAll(".dropdowns");

function toggleDropdown() {
  this.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleDropdown));
