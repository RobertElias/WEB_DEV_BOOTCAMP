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

//Objects quiz

var someObject = {};
someObject._name = "Hedwig";

someObject.age = 6;

var prop = "color"
someObject[prop] = "red";

//someObject.123 = true; unable to use dot notation

var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true  
};

var movies = [
  {title: "In Bruges", 
  hasWatched: true,
  rating: 5
  },
  {title: "Frozen",
  hasWatched: false,
  rating: 4.5
  },

  {
    title: "Les Miserable",
    hasWatched: false,
    rating: 3.5
  }
  
]
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})

function buildString(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});