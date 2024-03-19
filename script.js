const game = document.querySelector("#game");


 
setInterval(() => {
let car = document.createElement("div")
car.classList.add("cars")

game.appendChild(car)
    
}, 1000);