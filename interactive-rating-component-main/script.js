// point checker func
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
    circle.addEventListener("click", () => {    
        var check = document.querySelector(".checked");
        circle.classList.add("checked");
        if(check){
            check.classList.remove("checked");
        }         
    });
});

// submit button func
const submit = document.querySelector(".submit");
const point = document.getElementById("your-point");
submit.addEventListener("click", () => {
    var check = document.querySelector(".checked");
    document.querySelector(".thnx").classList.remove("none");
    document.querySelector(".rating").classList.add("none");
    if(check){
        point.innerText = `You selected ${check.innerText} out of 5`;
    } else {
        point.innerText = "You select nothing...";
    }
});