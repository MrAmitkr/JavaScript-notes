//Lesson 13_method chaining  ---------------------

// method chaning = calling one method after another
// in simple words it is use to use one code after the another within one line of code
// so it becomes one continious line of code


let username = "amit sharma";

/* 
let letter = username.charAt(0);
letter = letter.toUpperCase();
console.log(letter);
 */


// method chaining

let letter = username.charAt(0).toUpperCase().trim();
console.log(letter);

