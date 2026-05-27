
const btn = document.getElementById("btn");
const label = document.getElementById("label");


const min = 1;
const max = 6;
let ranNum;

btn.onclick = function(){
    ranNum = Math.floor (Math.random() * max) + min; 
    label.textContent = ranNum;

}
