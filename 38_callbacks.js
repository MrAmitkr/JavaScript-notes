//Lesson 38_callbacks   -------------------------

// callback = a function passed as an argument to another function 
// ensures that a function is not going
// to run before a task is complete
// helps us develop asynchronous code.
// (when one funtion has to wait for another problem)
// ex. wait for a file to load


/* 
// for using DisplayDOM write below HTML code into HTML file

 /* 
  <label id="myLabel"></label> 
  */

// and then write the function

/* 
let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

function sum(x, y){
    let result = x + y;
    return result;
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
 
 */

// using call back functions :

sum(2, 3, displayConsole);

function sum(x, y, callback){
    let result  = x + y;
    callback(result);

}