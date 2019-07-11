// var button = document.querySelector("button");
// button.addEventListener("click", function() {
//     console.log("someone clicked the button!");
// });

alert("connected");
var button = document.querySelector("button");
// var paragraph = document.querySelector("p");
var isPurple = false;

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});

// button.addEventListener("click", function(){
    
//     if(isPurple) {
//         document.body.style.background = "white";   
//     } else {
//         document.body.style.background = "purple";
//     }    
//     isPurple = !isPurple;
// });



// for(var i = 0; i < lis.length; i++){
//     lis[i].addEventListener("click", function(){
//     this.style.color = "pink";});
// }