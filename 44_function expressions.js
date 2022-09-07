//Lesson 44_function expressions  -------------------------

// function = function without a name also known as (anonymous function)
// avoiding polluting the global scope with names
// write it, then forget about it

// first example

/* 
sayHello();

function sayHello(){
    console.log("hello!");
}
 */
/* 
const greeting = function(){
    console.log("hello!");
}
greeting();
*/

// second example using function expression


// put below HTML code in order to create Button and Labels
/* 
<label id="myLabel">0</label><br>
    <button id="decreaseButton" onclick="decreaseCount()">decrease</button>
    <button id="increaseButton" onclick="increaseCount()">increase</button>
 */
// and then write Javascript code 
// following example is an example of increase and decrease function
/*
let count =0;

function increaseCount(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}
 */

// another way of writing same code

// in order to use another way
// we can add below HTML code in HTML file

/* 
<label id="myLabel">0</label><br>
<button id="decreaseButton">decrease</button>
<button id="increaseButton" onclick="increaseCount()">increase</button>

 */

// and then write javascript code

let count =0;


document.getElementById("increaseButton").onclick = function(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;

}
document.getElementById("decreaseButton").onclick = function(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;

}