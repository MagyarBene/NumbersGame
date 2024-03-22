import { kopar } from "./compare.js";
import { genRandNumb } from "./genRandNumb.js";

const button = document.getElementById("btn");
const input = document.getElementById("number")
const ujraG = document.getElementById("ujraGomb")
document.getElementById("btn").disabled=false
let lives = 5
document.getElementById("lifeCount").textContent = `Hátralévő próbálkozások: ${lives}`
let randNr = genRandNumb(1,100)
console.log(randNr);

let result = kopar(99,randNr)
console.log(result);

document.querySelector("#btn").addEventListener("click", check)
document.querySelector("#ujraGomb").addEventListener("click", newgame)

function check()
{
    if(lives>1)
    {   
        let guess = input.value
        if(kopar(guess,randNr)=="Helyes megfejtés!")
        {
            disableAll()
            document.getElementById("output").textContent = kopar(guess,randNr);
            ujraG.innerHTML="Újra"
            return
        }
        --lives;
        document.getElementById("output").textContent = kopar(guess,randNr);
        document.getElementById("lifeCount").textContent = `Hátralévő próbálkozások: ${lives}`
        return
    }
    document.getElementById("lifeCount").textContent = `Hátralévő próbálkozások: 0`
    document.getElementById("output").textContent = "Nincs több tippelési lehetőséged!"
    disableAll()
    //ujra gomb 
    ujraG.innerHTML="Újra"
}

function disableAll()
{
    button.disabled=true
    input.disabled =true
    
    button.classList.add("disabled")
    input.classList.add("disabled")
}

function enableAll()
{
    button.disabled=false
    input.disabled =false
    
    button.classList.remove("disabled")
    input.classList.remove("disabled")
}

function newgame()
{
    enableAll()
    randNr = genRandNumb(1,100)
    lives=5
    ujraG.innerHTML=""
    document.getElementById("output").textContent=""
}