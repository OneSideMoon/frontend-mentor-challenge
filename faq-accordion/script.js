document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll(".icons");
    icons.forEach(icon => {
        icon.addEventListener("click", (event) => {
            let iconId = event.target.getAttribute("id");
            var check = document.querySelector(`.${iconId}`).innerText;
            var switcher = document.getElementById(iconId); 
            switch(iconId){
                case "icon-1":
                    if(check != ""){
                        document.getElementById("accordion-1").innerText = "";  
                        switcher.src = "./img/icon-plus.svg";
                    } else {
                        document.getElementById("accordion-1").innerText = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend codin skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";  
                        switcher.src = "./img/icon-minus.svg";
                    }
                    break;
                case "icon-2":
                    if(check != ""){
                        document.getElementById("accordion-2").innerText = "";
                        switcher.src = "./img/icon-plus.svg";

                    } else {
                        document.getElementById("accordion-2").innerText = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
                        switcher.src = "./img/icon-minus.svg";
                    }
                    break;
                case "icon-3":
                    if(check != ""){
                        document.getElementById("accordion-3").innerText = "";
                        switcher.src = "./img/icon-plus.svg";
                    } else {
                        document.getElementById("accordion-3").innerText = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
                        switcher.src = "./img/icon-minus.svg";
                    }
                    break;
                case "icon-4":
                    if(check != ""){
                        document.getElementById("accordion-4").innerText = "";
                        switcher.src = "./img/icon-plus.svg";
                    } else {
                        document.getElementById("accordion-4").innerText = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
                        switcher.src = "./img/icon-minus.svg";
                    }
                    break;
            }
        });
    });
});