
const decbtn = document.getElementById("decbtn");
const resetbtn = document.getElementById("resetbtn");
const incbtn = document.getElementById("incbtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


 incbtn.onclick = function(){
    count++;
    countLabel.textContent = count;
 }

 decbtn.onclick = function() {
    count--;
    countLabel.textContent = count;
 } 

 resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
 }