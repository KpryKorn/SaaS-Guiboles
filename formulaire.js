const scriptURL =
  "https://script.google.com/macros/s/AKfycbwbz4FEutEOMSnJxkxoj_0FTmyCgxSdZp8OFPFU7Xi6M6JZkddH3fhMhBZKN0zV8cny/exec";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert("Merci pour votre message !");
    })
    .catch((error) => console.error("Error!", error.message));
});
