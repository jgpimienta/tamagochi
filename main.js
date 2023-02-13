const button_name = document.querySelector("#click-name")
const title_name = document.querySelector("#name")
const input_name = document.querySelector("#newNam")
let hambre = 0;
let vida = 100;
const hunger_bar = document.querySelector(".progress-bar-hunger")
const health_bar = document.querySelector(".progress-bar-health")
const button_alimentar = document.querySelector("#feed-button")
const button_limpiar = document.querySelector("#clean-button")
const button_jugar = document.querySelector("#play-button")
const button_reiniciar = document.querySelector("#play-button")
const imagen = document.querySelector(".face")

button_name.addEventListener("click", function () {  
   title_name.innerHTML = input_name.value;
});

let intervaloHambre = setInterval( function () {
hambre = hambre + 10;
if (hambre > 100) {
hambre = 100;
clearInterval(); 
}
UpdateHambre() 
}, 2000);

let intervaloVida =  setInterval( function() {
    vida = vida - 10;
    if (vida < 0) {
         vida = 0;
         clearInterval();
    }
    Updatevida()
}, 2000);

button_alimentar.addEventListener("click",function(){
    hambre = hambre -10
    if (hambre < 0) {
        hambre=0;
    }
    UpdateHambre();
}) 


function UpdateHambre(){
    hunger_bar.style.width = hambre + "%";
    if (hambre <=50) {
        hunger_bar.style.width = hambre + "%";
        hunger_bar.style.backgroundColor = "green";
    }
    else if (hambre > 50 && hambre <=80) {
        hunger_bar.style.width = hambre + "%";
        hunger_bar.style.backgroundColor = "yellow"; 
    }
    else if ( hambre >80) {
        hunger_bar.style.width = hambre + "%";
        hunger_bar.style.backgroundColor = "red"; 
    }
}

button_limpiar.addEventListener("click", function(){
    
    vida = vida +10
    if (vida >100) {
        vida=100;
    }
   Updatevida();
})


function Updatevida(){
    health_bar.style.width = vida + "%";
    if(vida > 50){
        health_bar.style.width = vida + "%";
        health_bar.style.backgroundColor = "green";
        imagen.src= "/imagenes/comiendo.gif.webp"
    }
    else if(vida > 20 && vida <= 50){
        health_bar.style.width = vida + "%";
        health_bar.style.backgroundColor = "yellow";
        imagen.src= "/imagenes/desesperado.gif.webp"
    }
    else if(vida <= 20){
        health_bar.style.width = vida + "%";
        health_bar.style.backgroundColor = "red";
        imagen.src="/imagenes/murio.gif.webp"
    }
}

button_jugar.addEventListener("click",function(){
    vida= vida-10
    hambre= hambre+10
    if (vida>100){
        vida=100;
     }
     if (hambre > 100){
        hambre=100;
    }
    updateVida()
    updateHambre()
})

function updateVida(){
    health_bar.style.width = vida + "%";
    if(vida > 51){
        health_bar.style.width = vida + "%";
        health_bar.style.backgroundColor ="green";
        newImg.src = "./images/200w.webp";
     }
    else if(vida >20 && vida <= 50 ){
        health_bar.style.width = vida + "%";
        newImg.src = "./images/s.gif";
        health_bar.style.backgroundColor="yellow";
       
    }
    else if(vida <= 20 && vida > 0 ){
        health_bar.style.width = vida + "%";
        newImg.src = "./images/die.gif";
        health_bar.style.backgroundColor="red";
        
    }
}