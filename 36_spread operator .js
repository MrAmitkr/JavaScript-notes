//Lesson 36_spread operator   -------------------------

// spreaad opreator = allows an iteration 
// such as ... an array or string to be expanded in place 
// where zero or more arguments are expected (unpacks the elements)
// use ... to use spread operator

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number);
console.log(...number); // unpack the element of the array

let username = "Amit sharma"
console.log(...username); // unpack the string into individual elements


// it will give no value because arrayi is pack

/*
 let maximum = Math.max(number); 
*/


let maximum = Math.max(...number); // it will unpack elements of array
console.log(maximum);


// another example

let class1 = ["spongebob", "patrick", "sandy"];
let class2 = ["squidward", "Mr. Krabs", "plankton"];

/*
 class1.push(class2); 
*/
 // output :  ['spongebob', 'patrick', 'sandy', Array(3)]

class1.push(...class2); 
// output : ['spongebob', 'patrick', 'sandy', Array(3), 'squidward', 'Mr. Krabs', 'plankton']


console.log(...class1)