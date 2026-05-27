
//let x = 25;
//let y = 100;
//let z = "Duroru";
//console.log(`You are ${z} and You are ${x} Years Old`);
//document.getElementById("p1").textContent = ` Name is ${z}`;
//document.getElementById("p2").textContent = `Age is ${x}`;




//taking input: 
//Easy Way
//let username =window.prompt(username : );


// professionally : creating HTML textbox
//=========================================


// let username;
// document.getElementById("btn").onclick = function(){
//     username = document.getElementById("text").value;
//     document.getElementById("myh1").textContent = `Hello  ${username}`

//}
// let age = window.prompt("Your Age");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);
//
const PI = 3.147;
let radius;
document.getElementById("btn").onclick = function(){
    radius = document.getElementById("text").value;
radius = Number(radius);
let circumference  = 2 * PI * radius;
document.getElementById("h3").textContent = `The Circumference of a circle is : ${circumference}`;
}



