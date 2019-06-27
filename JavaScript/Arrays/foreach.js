function myForEach(arr, func) {
    //loop through aray
    for(var i = 0; i < arr.length; i++) {

    }
    //call func() through each item array
    func();
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, alert)