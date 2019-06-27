var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

console.log(person["name"]);

//dot notation
console.log(person.name);

// make an empty object and then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

//another way of initializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

//CAN HOLD ALL SORTS OF DATA

var junkObject = {
    age: 57,
    color: "Purple",
    isHungry: true,
    friends: ["Horatio", "Hamlet"],
    pet: {
        name: "Rusty",
        species: "Dog",
        age: 2
    }
};


//ARRAY
var dogs = ["Rusty", "Lucky", "Bubba"];

var posts = [
    { title: "Cats are mediocre", 
      author: "Colt",
      comments: ["awesome post"] 
    }, 
    { title: "Cats are awesome", 
      author: "Cat lover",
      comments: ["<3", "Go to hell i hate you lol"]
    }
]

//OBJECTS
var dog = {
    name: "Bubba",
    breed: "Lab"
}

