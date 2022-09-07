//Lesson 5-type conversion ---------------------------------

//Problem: we can't add a number to the string 
//If we do so we just concatinate the string with the number 
//Type conversion = change the datatype of a value to another
//(string, number, booleans)

/* 
let age = window.prompt("how old are you");
console.log(typeof age); //gives the data type of variable
age = Number(age) // this will convert string to a number
age += 1;
console.log("Happy birthday! you are now", age, "years old"); 
*/

let x;
let y;
let z;

x= Number("3.14"); //number constructor
x= Number("pizza"); //result NaN_not a number
y= String(3.14); //string constructor
z= Boolean(""); //boolean constructor : passing anything empty will create false in case of boolean

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


