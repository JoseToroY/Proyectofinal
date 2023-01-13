let bton = document.getElementById("cv");
let bton1 = document.getElementById("btn-close");
let skill = document.querySelector(".skill");


document.getElementById("skill");
bton.addEventListener("click", function () {
    if (skill.style.display === "none") {
    } else {
      skill.style.display = "block";
    }
});

bton1.addEventListener("click", function () {
    if (skill.style.display === "block") {
      skill.style.display = "";
    } else {
      skill.style.display = "block";
    }
});

