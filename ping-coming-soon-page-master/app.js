const btn = document.querySelector(".submit");
const input = document.querySelector(".email");
const err = document.querySelector(".err");

btn.addEventListener("click", () => {
    if(err.classList.contains("invisible")) {
        input.style.borderColor = "hsl(354, 100%, 66%)";
        input.style.opacity = "1";
        err.classList.remove("invisible");
    } else {
        input.style.borderColor = "hsla(0, 0%, 59%)";
        input.style.opacity = "0.25";
        err.classList.add("invisible");
    }
});