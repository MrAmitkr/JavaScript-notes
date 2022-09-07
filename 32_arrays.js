//Lesson 32_arrays  ---------------------------------

// array = think of it as a variable
// that can store multiple values
// array index starts with 0

let fruit = ["apple", "orange", "banana"];

// we can change any value in array by
fruit[0]= "coconut";

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[3]); // it will show undefined because number is not in the array


fruit.push("coconut");  // we can add an element by using push command
fruit.pop();            // remove last element
fruit.unshift("mango"); // add element in the beginning
fruit.shift();          // remove element from beginning

let length = fruit.length; //gives the length of the array
let index = fruit.indexOf("orange");  // gives the index value of element
console.log(index);

