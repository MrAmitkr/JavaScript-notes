//Lesson 25_return statement  -------------------------

// return = return a value back to the place where you invoke a function

let area;
let width;
let height;

width = window.prompt("enter width");
height = window.prompt("enter height");

// area become equal to the value of result in the function
area=getarea(width,height); // helps to invoke the function

console.log(" the area is: ", area)

function getarea(width, height){

    let result = width * height;
    return result;

}