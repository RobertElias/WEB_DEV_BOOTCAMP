var age = Number(prompt("What is your age?"));

//If age is negative
if(age < 0){
    console.log("Come back once you're out of the womb");
}

//If age is 21
if(age === 21) {
    console.log("Happy 21st birthday!");
}
//if age is odd and not evenly divided by 0
if(age % 2 !==0) {
    console.log("Your age is odd!");
}
//if age is a perfect square
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}