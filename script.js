const form = document.getElementById("form");
const result = document.querySelector("h1");
const reset = document.getElementById("reset");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  result.textContent = `First Name: ${name}, Last Name: ${lastName}`;
});

reset.addEventListener("click", function () {
  result.textContent = "";

  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
});
