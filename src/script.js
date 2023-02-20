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
// rolloutButton.addEventListener("click", show_hide);

const dogFound = new CustomEvent("test");

// add an appropriate event listener
// window.addEventListener("test", (e) => console.log(e));

setTimeout(() => {
  window.dispatchEvent(dogFound);
}, 1000)


// function sendEmail() {
//   fetch("https://formsubmit.co/ajax/5dd9c70e831165c738d2000305c22722", {
//     method: "POST",
//     headers: { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "FormSubmit",
//         message: "Cus Tome!"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// sendEmail()
