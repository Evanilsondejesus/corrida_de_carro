const game = document.querySelector("#game");

const info = document.querySelector("#info");

 





var corrida= 0;
  
setInterval(() => { 

    const cars = document.querySelectorAll(".pavimento")


    //var irmaos = game.children;



for (let corrida = 0; corrida < cars.length; corrida++) {
var car_tamanho = cars[corrida].style.left

var car_top = parseInt(window.getComputedStyle(cars[corrida]).getPropertyValue('top'))
var car_lef = parseInt(window.getComputedStyle(cars[corrida]).getPropertyValue('left'))

 cars[corrida].style.top = (car_top+10)+"px"
 




 info.innerText = car_lef

   if(car_top > 1000){
    console.log(car_lef)


    
   var novosObastaculos = document.createElement("div");

novosObastaculos.innerHTML = `<img src="pista2.png" alt="">`
   novosObastaculos.classList.add("pavimento")

if(car_lef){
novosObastaculos.style.top = "-100px"
novosObastaculos.style.left = car_lef +"px"

}




// else{
//     novosObastaculos.style.top = "-100px"

//     novosObastaculos.style.left = "925px"


// }



   
    

game.appendChild(novosObastaculos)

cars[corrida].remove()

}

    
}




     
// const car = document.querySelector("#car");


    
//     var top_car = parseInt(window.getComputedStyle(car).getPropertyValue('top'))
// console.log(top_car)

// corrida+=10
// car.style .top= `${corrida}px`


}, 100);