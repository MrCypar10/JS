let myFrm = document.myfrm;
let txtFirst = myFrm.txtfno;
let txtSecond = myFrm.txtsno;
let txtResult = myFrm.txtresult;
let btnAdd = myFrm.btnadd;
let btnClear = myFrm.btnclear;

btnAdd.addEventListener("click", () => {
	let x = txtFirst.value;
	let y = txtSecond.value;
	let z = Number(x) + Number(y);
	txtResult.value = z;
});
btnClear.addEventListener("click", () => {
	txtFirst.value = "";
	txtSecond.value = "";
	txtResult.value = "";
	txtFirst.focus();
});
