//Lesson 24_functions  -------------------------

//functions = Define code once, and use it many times
// to perform some code, call the function name
//structure of function

function happybirthday(){
    console.log("Happy birthday!");

}

// below are known as global variable
// global variable are variables that declares outside the function
// functions have access to global variable 
/*

let username ="amit"
let age =23;

// we can define the function with the given below 
//we can acess global variables in the function

function happybirthday(){
    console.log("Happy birthday!");
    console.log("to you", username);
    console.log("you are", age , "years old");
}

// we can call the function by typing name of the function with parenthesis like happybirthday();

happybirthday();
happybirthday();
happybirthday();

 */

// a vriables declared by let keyword aren't recognised outside of the immediate set of curly braces
// so happy birthday function has no idea what username and age is 
// these variables only exist in the immediate set of parenthesis

/* 
startprogram();

function startprogram(){
    let username ="amit"
    let age =23;
    happybirthday(username, age);
}

function happybirthday(){
    console.log("Happy birthday!");
    console.log("to you", username);
    console.log("you are", age , "years old");
}

*/

// so what we can do we can send some infprmation in happybirthday so it can recognize username and age
// these username and age are called arguments and we can pass then in function

/* 
startprogram();

function startprogram(){
    let username ="amit";
    let age =23;
    happybirthday(username, age);
}

function happybirthday(username, age){
    console.log("Happy birthday!");
    console.log("to you", username);
    console.log("you are", age , "years old");
}
 */


// you can also change the argument differently and it will work the same
// but don't change the order of arguments
startprogram();

function startprogram(){
    let username ="amit";
    let age =23;
    happybirthday(username, age);
}

function happybirthday(userN, Year){
    console.log("Happy birthday!");
    console.log("to you", userN);
    console.log("you are", Year , "years old");
}

