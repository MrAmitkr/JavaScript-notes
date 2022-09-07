//Lesson 7-math ---------------------------------

// An intrinsic object that provides basic mathematics functionality and constants.

let x = 3.14;
let y = 5;
let z =9;
let maximum;
let minimum;
x = Math.round(3.14);   //always gives the round of value 
x = Math.floor(x); //  round down the value
x = Math.ceil(x); //  round up the value
x = Math.pow(x, 3); // gives the value of power i.e x to power of 3
x = Math.sqrt(x); // gives the square root of the x 
x = Math.abs(x); // gives the value of distance away from centre
maximum = Math.max(x, y, z); // gives the maximum value of assigned number
minimum = Math.min(x, y, z); // gives the minimum value of assigned number
x = Math.PI; // make x value equal to pi

console.log(x);
console.log(maximum);
console.log(minimum);
