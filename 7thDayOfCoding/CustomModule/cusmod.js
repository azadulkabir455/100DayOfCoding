function average(arr){
    let sum = 0;

    arr.forEach(num => {
        sum += num;
    });
    return sum/arr.length;
}

let car = {
    name: "Ferrary",
    color: "red",
    price: 199,
    demo: function(){
        return "This is a function";
    }
}

// module.exports = average; 

/*In this way the file is only contain the object.
When we import the file this directly access the function.
*/

module.exports = {
    avg: average,
    name: "Akash",
    repo: "http://github.com",
    car: car
}

/*
In this way the file is contain the function as a method like object method.
When we import the file we acess fuction as a object method and in this way we add many function object and another thing.
*/