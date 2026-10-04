//Handle keydown for input
let txtbox = document.querySelector("#mytext");
txtbox.addEventListener("keydown",(e)=>{
  alert("you typed :  "+e.key);
});