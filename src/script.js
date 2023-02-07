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



// function sendEmail() {
//   fetch("https://formsubmit.co/ajax/tom.hendrych@seznam.cz", {
//     method: "POST",
//     headers: { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "FormSubmit",
//         message: "I'm from Devro LABS"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// sendEmail()
