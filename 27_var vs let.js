//Lesson 27_var vs let  -------------------------

// variable scope = where a variable is accessible
// let = variable are limited to block scope{}
// var = variable are limited to a function{}

/*
for(let i = 1; i <=3; i+=1)
{
console.log(i);
}

// below code will give us error because any variable define with let is limited to block acope and can only use in function

console.log(i); 
*/


/* 
// another example
dosomething();

// a variable declared with var keyword can escape a set of curly braces but cannot escape a function
function dosomething(){
    for(var i = 1; i <=3; i+=1){

    }
}
console.log(i);
 */


// in order to solve the problem we use global variable
// global variable = is declared outside any function
// (if global, var will change browser's window properties)

let name = "amit"; 
// since it is written outside the funtion it is     called as global variable

dosomething();

function dosomething(){
    for(var i = 1; i <=3; i+=1){

    }
}

// var name = "amit"; //don't use this because it will change windows property