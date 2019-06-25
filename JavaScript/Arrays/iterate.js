var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//ForEach

// Array.forEach(someFunction)

var colors =  ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
   //color is placeholder, call it whatever you want
   console.log(color); 
});

var numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(color) {
    if(color % 3 === 0) {
        console.log(color);
    }
});

[1,2,3].forEach(function(el, i, arr) {
    console.log(el, i, arr);
  });

  function logNums(el, i, arr) {
    console.log(el, i, arr);
  }
   
  [1,2,3].forEach(logNums);