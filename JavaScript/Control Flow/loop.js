// var count = 1;
// while(count < 6) {
//     console.log("Count is: " + count);
//     count++;
// }

// var str = "hello";
// var count = 0;

// while(count < str.length) {
//     console.log(str[count]);
//     count++;
// }

// var num = 1;

// while(num <= 10) {
//     console.log(num);
//     num +=2;
// }

// var num = 1;
// while(num <= 20) {
//     if(num % 4 === 0) {
//         console.log(num);
//     }
//     num++;
// }

//Print all numbers between -10-19
console.log("printing all numbers -10 to 19")
var counter = -10;

while(counter < 20) {
    console.log(counter);
    counter++;
}

//print all even between 10 and 40
console.log("printing all even numbers from 10 to 40")
var counter = 10;

while(counter <= 40) {
    console.log(counter);
    counter+=2;
}

//print all odd between 300 and 333

console.log("printing all odd numbers from 300 to 333")
var counter = 300;

while(counter <= 333) {
    if(counter % 2 !==0){
        console.log(counter);
    }
    counter+=1;
}

//Print all numbers divisible by 5 and 3 between 5 and 50!

console.log("printing all numbers divisible by 5 and 3 between 5 and 50!")
var counter = 5;

while(counter <= 50) {
    if(counter % 5 ===0 && counter % 3 === 0){
        console.log(counter);
    }
    counter+=1;
}