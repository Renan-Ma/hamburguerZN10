const nav = document.querySelector("header nav");
const toggle = document.querySelectorAll(".toggle");
const links = document.querySelectorAll("header nav a");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}