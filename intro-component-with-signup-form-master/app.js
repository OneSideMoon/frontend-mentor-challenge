const submit = document.getElementById("submit");
const inputs = document.querySelectorAll(".input");
const spans = document.querySelectorAll(".span");

inputs.forEach(input => {
    submit.addEventListener("click", () => {    
        if(input.classList.contains("err")){
            input.classList.remove("err");
            spans.forEach(span => {
                span.classList.add("invisible");            
           });
        } else {
            input.classList.add("err");
            spans.forEach(span => {
                span.classList.remove("invisible");
            });
        }
    });    
});

