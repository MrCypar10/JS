const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");

let age;

mysubmit.onclick = function(){
    
    age = mytext.value;
    age = Number(age);


    if(age >= 100) {
        resultElement.textContent = `You're too Old.`;
    }
    else if(age == 0) {
        resultElement.textContent = `You just Born.`;
    } 
    else if(age >= 18) {
        resultElement.textContent = `You're Old Enough.`;
    }
    else if(age < 0){
        resultElement.textContent = `You can't be Serious.`;
    }
    else{
        resultElement.textContent = `You're Not Old Enough.`
    }
}
