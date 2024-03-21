const game = document.querySelector("#game");
const info = document.querySelector("#info");
var audio = new Audio("sons/btn.mp3"); 
let pontos = document.querySelector("#pontos");
var som_fim_game = new Audio("sons/fim_game.mp3"); 


let registra_posicao = []; 

document.addEventListener('keydown', moverCarro);


let posicao_carro = ["450px", "640px", "860px"];
let velocidade_carro = 100

let px =0;

px=1

 

function pararCarro(event) {
 
   
  
      if (event.keyCode === 32) {
        clearInterval(velocidade_carro);


         velocidade_carro = 80
  initGame()
      }
  }
  
  // Adiciona um event listener para o evento keyup
  document.addEventListener('keyup', pararCarro);
   
function moverCarro(){

 



const carro = document.querySelector("#meu_car");


carro.style.left = posicao_carro[px]
//let posicao_carro = parseInt(window.getComputedStyle(carro).getPropertyValue('left')) 

 

var tecla =event.keyCode;
switch (tecla) {
  //<--
  case 37:
   

if(px > 0)px--
carro.style.left= posicao_carro[px];
audio.play(); 


break;
 


case 39:
if(px < 2)px++
 
carro.style.left = posicao_carro[px]


audio.play(); 



// -->
break;



case 32:  

clearInterval(velocidade_carro);



 
velocidade_carro= 15
 
initGame()



// -->
break;






default:
break;

}
 

}

var corrida= 0;
  
 

function initGame() {
 velocidade_carro = setInterval(() => { 
  

    const carro = document.querySelector("#meu_car");
  const pavimentos = document.querySelectorAll(".pavimento")
  const carros = document.querySelectorAll(".carros")
    
  for (let corrida = 0; corrida < carros.length; corrida++) {
  let car_top = parseInt(window.getComputedStyle(carros[corrida]).getPropertyValue('top'))
  let car_lef = parseInt(window.getComputedStyle(carros[corrida]).getPropertyValue('left'))
  
  let car_width = parseInt(window.getComputedStyle(carros[corrida]).getPropertyValue('width'))
  let car_height = parseInt(window.getComputedStyle(carros[corrida]).getPropertyValue('height'))
   
  var carro_top = parseInt(window.getComputedStyle(carro).getPropertyValue('top'))
  var carro_left = parseInt(window.getComputedStyle(carro).getPropertyValue('left'))
  var carro_width = parseInt(window.getComputedStyle(carro).getPropertyValue('width'))
  var carro_height = parseInt(window.getComputedStyle(carro).getPropertyValue('height'))
  
    
  if(carro_left + carro_width > car_lef &&
     car_lef +  car_width >carro_left
    &&carro_top + carro_height > car_top
    &&car_top + car_height-15>  carro_top 
     
   ){
  
    
  
  clearInterval(velocidade_carro);
  
  
document.removeEventListener('keydown', moverCarro);
carros[corrida].style.visibility = "hidden";
som_fim_game.play(); 
carro.src= "imagens/carro_destruido.png"
}
   
  
  
  carros[corrida].style.top = (car_top+10)+"px"
   
  
  if(car_top > 1000){
     let novo_carro = document.createElement("img");
    
    novo_carro.src ="imagens/carro.png"
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
  
    novo_carro.style.top = "-115px";
    game.appendChild(novo_carro)
    carros[corrida].remove()
    Number(pontos.innerText++)
    
    }
    
     
  }
  
  
  for (let corrida = 0; corrida < pavimentos.length; corrida++) { 
  
  var car_top = parseInt(window.getComputedStyle(pavimentos[corrida]).getPropertyValue('top'))
  var car_lef = parseInt(window.getComputedStyle(pavimentos[corrida]).getPropertyValue('left'))
  pavimentos[corrida].style.top = (car_top+10)+"px"
    
  
  if(car_top > 1000){
  let novo_pavimento = document.createElement("div");
  
  novo_pavimento.innerHTML = `<img src="imagens/pavimento.png" alt="">`
  novo_pavimento.classList.add("pavimento")
  
  if(car_lef){
  novo_pavimento.style.top = "-100px"
  novo_pavimento.style.left = car_lef +"px"
  
  }
  game.appendChild(novo_pavimento)
  
  pavimentos[corrida].remove()
  
  }
  
      
  }
  }, velocidade_carro);
}
initGame()
