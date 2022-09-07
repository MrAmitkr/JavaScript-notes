//Lesson 10-random number generator ---------------------

/* 
let x = Math.floor(Math.random()*6) + 1;

//Math.random will give you the random values between the give number 
// and Math.floor will create the round down number of the given number
// *6  will create a random number between 0 to 6 in Math.random
// and + 1 will give a number not equal to zero
 
console.log(x);
 */

// with the help of innerHTML
//The innerHTML property sets or returns the HTML content (inner HTML) of an element.

// Put this into HTML file to make labels and button for roll
/* 
<label id="xlabel"></label><br>
<label id="ylabel"></label><br>
<label id="zlabel"></label><br>
<button type="button" id="rollbutton">roll</button>

 */
// then write this code in javascript in order to access inner HTML


let x ;
let y ;
let z ; 

document.getElementById("rollbutton").onclick = function(){

    x = Math.floor(Math.random()*6) + 1;
    y = Math.floor(Math.random()*6) + 1;
    z = Math.floor(Math.random()*6) + 1;

     document.getElementById("xlabel").innerHTML =x;
     document.getElementById("ylabel").innerHTML =y;
     document.getElementById("zlabel").innerHTML =z;

}