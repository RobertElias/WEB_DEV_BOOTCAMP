var colors = ["red", "orange", "yellow"];

function myForEach(arr, func) {
    //loop through aray
    for(var i = 0; i < arr.length; i++) {

    }
    //call func() through each item array
    func();
}

myForEach(colors, alert)

function myForEach(arr, func) {
    //loop through aray
    for(var i = 0; i < arr.length; i++) {

    }
    //call func() through each item array
    func(arr[i]);
}

