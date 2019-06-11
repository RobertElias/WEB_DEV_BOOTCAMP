// for(var count = 0; count < 6; count++) {
//     console.log(count);
// }

// var count = 1;

// while(count < 6) {
//     console.log("count is: " + count);
//     count++;
// }

// var str = "hello";

// for(var i = 0; i , str.length; i++){
//     console.log(str[i]);
// }

// for(var i = 0; i < 16; i+=8) {
//     console.log(i);
// }

// var str = "ahceclwlxo";

// for(vari = 1; i < str.length; i+=2) {
//     console.log(str[i]);
// }


//Print all numbers between -10-19
console.log("printing all numbers -10 to 19")
for(var i = -10; i < 20; i++){
    console.log(i);
}

//print all even between 10 and 40
console.log("printing all even numbers from 10 to 40")
for(var i = 10; i <= 40; i+=1){
    if(i % 2 === 0){
      console.log(i);
    }
}
//print all odd between 300 and 333

console.log("printing all odd numbers from 300 to 333")
for(var i = 300; i <= 333; i++){
    if(i % 2 !==0) {
        console.log(i);
    }
}

//Print all numbers divisible by 5 and 3 between 5 and 50!

console.log("printing all numbers divisible by 5 and 3 between 5 and 50!")
var counter = 5;

for( var i =5; i <= 50;i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}