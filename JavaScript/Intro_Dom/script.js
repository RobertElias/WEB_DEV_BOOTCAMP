// var h1 = document.querySelector("h1");

// h1.style.color = "pink";


// document.URL;
// document.head;
// document.body;
// document.links;


//documennt.getElementByTagName()
var tags = documennt.getElementByTagName("li");
console.log(tags[0]);

// document.getElementsByClassName()
var tags = doucument.getElementsByClassName('bolded');
console.log(tags[0]);

// document.getElementsById()
var tag = document.getElementById("highlight");
console.log(tags[0]);
// document.querySelector()
var tag = document.querySelector("#highlight");
var tag = document.querySelector(".bolded");


// document.querySelectorAll()
var tag = document.querySelector(".bolded");


//Style property

var tag = document.getElementById("highlight");

//manipulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yello";
tag.style.marginTop = "200px";

var tag = document.querySelector("h1");


//CLASSLIST
//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");

//textContent

//select the <p></p> tag:

var tag = document.querySelector("p");

//Retrieve the text content
tag.textContent 

//alternative

tag.textConent = "Blah blah blah";

//
tag.innerHTML

//ATTRIBUTES use getAttribute() adn setAttribute()

var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com");
//<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="cogi.png"

/*
Note about changing the Google logo in next lecture
Hi Everyone!

In the following lecture, Playing With Google Code Along, you'll be changing the logo on the google website using the src attribute. 
However, this method no longer works. Instead, use the srcset attribute to change the logo image.

If you are having difficulty, you can read more about how to do this here.

Additionally, if you're visiting google.com and getting redirected to your country's version of google, then try visiting this link instead.
 - https://www.google.com/ncr

Lastly, if you'd rather be able to follow along directly with the lecture then please use this example website* 
that I created, instead of google.com. *Note - you will need to first inspect the logo by right clicking on it
 and selecting Inspect Element then run the JS code in the console

--------
Cheers,
Ian Learn more

*/