const button = document.querySelector(".nav-toggle");
const links = document.querySelector('.links');

button.addEventListener("click", () => {
    links.classList.toggle("show")
})