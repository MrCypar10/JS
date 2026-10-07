let myForm = document.loginform;
let usrTxt = myForm.txtusername;
let usrpass = myForm.txtpassword;
let btn = myForm.btnlogin;

  btn.addEventListener("click", () =>{
    alert(usrTxt.value +","+ usrpass.value);
})
