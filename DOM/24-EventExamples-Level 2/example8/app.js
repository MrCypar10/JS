let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
	e.target.style.color = "crimson";
});

let btn = document.querySelector("input");
btn.addEventListener("click", (e) => {
	let item = prompt("Enter next todo");
	ul.innerHTML += "<li>" + item + "</li>";
});
