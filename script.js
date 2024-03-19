const game = document.querySelector("#game");

 





var corrida= 0;
  
setInterval(() => { 

    const cars = document.querySelectorAll(".cars")


    //var irmaos = game.children;



for (let corrida = 0; corrida < cars.length; corrida++) {
var car_top = parseInt(window.getComputedStyle(cars[corrida]).getPropertyValue('top'))
var car_lef = parseInt(window.getComputedStyle(cars[corrida]).getPropertyValue('left'))

 cars[corrida].style.top = (car_top+10)+"px"
 




   if(car_top > 900){
    console.log(car_lef)


    
   var novosObastaculos = document.createElement("div");


   novosObastaculos.classList.add("cars")

if(car_lef == 318){
console.log("sim estou muito aqui")
novosObastaculos.style.top = "-100px"

}else{
    novosObastaculos.style.top = "-100px"

    novosObastaculos.style.left = "925px"


}



   
    

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