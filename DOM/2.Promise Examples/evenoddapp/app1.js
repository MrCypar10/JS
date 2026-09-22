let span1 = document.querySelector("#result");
let span2 = document.querySelector("#icn");
function makeProject(num) {
  let pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("Hurray! Project completed!");
      } else {
        reject("Sorry! Could not complete the project");
      }
    }, 3000);
  });
  return pr;
}
function doTask() {
  let today = new Date();
  let currSec = today.getSeconds();
  console.log("currSec:",currSec)
  console.log("makeProject Called")
  let pr = makeProject(currSec);
  pr.then(
    (success) => {
      span1.innerText = success;
      span2.innerText = "😁😁";
    },
    (error) => {
      span1.innerText = error;
      span2.innerText = "😢😢";
    },
  );
  console.log("Bye!")
}
