const rolloutText = document.getElementById("rollout-text");
const rolloutButton = document.getElementById("poznej-me-vic-button");

function show_hide() {
  if (rolloutText.style.display === "none") {
    rolloutText.style.display = "block";
  } else {
    rolloutText.style.display = "none";
  }
}
rolloutButton.addEventListener("click", show_hide);
