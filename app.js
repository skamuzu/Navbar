const button = document.querySelector(".nav-toggle");
const links = document.querySelector('.links');
const main = document.querySelector("main")

button.addEventListener("click", () => {
    links.classList.toggle("show")
})

main.addEventListener("click", () => {
    links.classList.remove("show")
})
