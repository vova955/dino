const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
    up();
});

function up() {
    if(dino.classList !== "up") {
        dino.classList.add("up")
    }
    setTimeout( function () {
        dino.classList.remove("up")
    }, 300)
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over")
    }
}, 10);