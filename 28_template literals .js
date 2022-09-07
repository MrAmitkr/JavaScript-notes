//Lesson 28_template literals  -------------------------

// templete literation = delimited with ( ` )
// instead of double or single quotes
// allow embedded variables and expressions

let username = "amit";
let item = 3;
let total = 75;

/*
console.log("hello", username);
console.log("you have", items, "items in your cart");
console.log("your total is $", total);
 */

// using templete iteration

console.log(`hello ${username}`);
console.log(`you have ${item} items in your cart `);
console.log(`your total is  ${total}`);

//another way to print the text

let text = 
`hello ${username}
you have ${item} items in your cart 
your total is  ${total}`;

console.log(text);

// output :
/* 
hello amit
you have 3 items in your cart 
your total is  75 
*/