const game = document.querySelector("#game");
const info = document.querySelector("#info");
var audio = new Audio("sons/btn.mp3"); 


let registra_posicao = []; 

document.addEventListener('keydown', moverCarro);
function moverCarro(){
let px =0;

const carro = document.querySelector("#meu_car");
let posicao_carro = parseInt(window.getComputedStyle(carro).getPropertyValue('left')) 

 

var tecla =event.keyCode;
switch (tecla) {
  //<--
  case 37:
  px-=10;
carro.style.left=(px+posicao_carro)+"px";
audio.play(); 


break;
 


case 39:
px+=10;
carro.style.left= (px+posicao_carro)+"px"; 
audio.play(); 

// -->
break;

default:
break;

}
 

}

 

var corrida= 0;
  
setInterval(() => { 
const pavimentos = document.querySelectorAll(".pavimento")
const carros = document.querySelectorAll(".carros")
  
for (let corrida = 0; corrida < carros.length; corrida++) {
let car_top = parseInt(window.getComputedStyle(carros[corrida]).getPropertyValue('top'))
let car_lef = parseInt(window.getComputedStyle(carros[corrida]).getPropertyValue('left'))


carros[corrida].style.top = (car_top+10)+"px"
 



if(car_top > 1000){
   let novo_carro = document.createElement("img");
  
  novo_carro.src ="meu_car2.png"
  novo_carro.classList.add("carros")
  
  



let posicao_carro = ["450px", "640px", "860px"];
 

if(registra_posicao.length == 0){
  var sorteio = Math.floor(Math.random() * 3);
  novo_carro.style.left =  posicao_carro[sorteio]
  registra_posicao.push(sorteio)
 

}else if(registra_posicao.length == 1){
let sorteio = registra_posicao[0]

  do {
   sorteio = Math.floor(Math.random() * 3);
} while (sorteio === registra_posicao[0]);
novo_carro.style.left =  posicao_carro[sorteio]
     
registra_posicao = []




} 

  novo_carro.style.top = "15px";
  game.appendChild(novo_carro)
  carros[corrida].remove()
  
  }
  
   
}


for (let corrida = 0; corrida < pavimentos.length; corrida++) { 

var car_top = parseInt(window.getComputedStyle(pavimentos[corrida]).getPropertyValue('top'))
var car_lef = parseInt(window.getComputedStyle(pavimentos[corrida]).getPropertyValue('left'))
pavimentos[corrida].style.top = (car_top+10)+"px"
 


 

   if(car_top > 1000){
 let novo_pavimento = document.createElement("div");

novo_pavimento.innerHTML = `<img src="pista2.png" alt="">`
novo_pavimento.classList.add("pavimento")

if(car_lef){
novo_pavimento.style.top = "-100px"
novo_pavimento.style.left = car_lef +"px"

}
game.appendChild(novo_pavimento)

pavimentos[corrida].remove()

}

    
}
}, 50);