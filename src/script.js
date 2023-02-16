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
