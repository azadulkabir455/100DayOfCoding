// const average = require("./cusmod");
// console.log(average([2,3,4]));  

// It's direct access the function so we don't need anything else

const custom = require("./cusmod");

console.log(custom.avg([3,5,7]));
console.log(custom.name);
console.log(custom.car.demo());
// It's access the function as a object method
