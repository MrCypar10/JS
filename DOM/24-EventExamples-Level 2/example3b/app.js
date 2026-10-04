//Allow only digits
let x = document.getElementById("mytext");
x.addEventListener("keydown", (e) => {
    if((e.key < "0" || e.key > "9") && (e.key != "Backspace")){
        alert("Only Digits Allowed");
        e.preventDefault();

    }
});
