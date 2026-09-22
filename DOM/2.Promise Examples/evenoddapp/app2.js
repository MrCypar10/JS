let sp1 = document.getElementById("result");
let sp2 = document.getElementById("icn");

function makeProject(num) {
    let pr = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve("Hurray! I have completed the Project");
            } else {
                reject("So sad! I could not complete the project");
            }
        }, 4000);
    });
    return pr;
}

function doTask() {
    let today = new Date();
    let currSec = today.getSeconds();
    sp1.innerHTML = "Curr sec is " + currSec;
    let pr = makeProject(currSec);
    pr.then((result) => {
            sp1.innerHTML += `<br>${result}`;
            sp2.innerHTML = "😀😀";
        })
        .catch((error) => {
            sp1.innerHTML += `<br>${error}`;
            sp2.innerHTML = "😪😪";
        })
        .finally(() => {
            sp1.innerHTML += `<br>Thank You!`;
        });

    console.log("Hi");
}