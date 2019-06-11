// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prmpt("are we there yet!!");
// }
// alert("Yay, we made it!!");


// if(answer === "yes") {
//     alert("YAY, WE MADE IT!!")
// } else {
//     var answer = prompt("arewe there yet?");
// }

//VERSION 2
var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prmpt("are we there yet!!");
}

alert("Yay, we made it!!");

