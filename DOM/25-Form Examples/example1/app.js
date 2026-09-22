let myForm = document.loginform;
let txtUser = myForm.txtusername;
let txtPassword = myForm.txtpassword;
let myBtn = myForm.btnlogin;
myBtn.addEventListener("click", () => {
  alert(txtUser.value + "," + txtPassword.value);
});
