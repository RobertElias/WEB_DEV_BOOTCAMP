//Is even
// function isEven(num) {
//     if(num % 2 === 0) {
//         return true;
//     } else {
//         return false
//     }
// } 

function isEven(num) {
    return num % 2 === 0;
}

//Factorial

function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i =1; i <= num; i++) {
        result = result *= i;
    }
    
    //return the result variable
    return result;
}   

//KebabToSnake

function KebabToSnake(str) {
    //replace all '-' to "_"
    var newStr = str.replace(/-/g, "_");
    //return
    return newStr;
}