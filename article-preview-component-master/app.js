const button = document.getElementById("share")

button.addEventListener("click", () =>{
    const social = document.getElementById("social")
    const triangle = document.getElementById("triangle")
    if(social.classList.contains("invisible")){
        social.classList.remove("invisible");
        triangle.classList.remove("invisible");
    } else {
        social.classList.add("invisible");
        triangle.classList.add("invisible");
    }
});