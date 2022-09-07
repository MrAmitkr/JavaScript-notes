//Lesson 8-hypotenuse calc practice program  -----------------

let a;
let b;
let c;

/*
 a =window.prompt("enter the side a");
a =Number(a);

b = window.prompt("enter the side b");
b = Number(b);
 
c = Math.pow(a,2) + Math.pow(b,2);
c = Math.sqrt(c);

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("side c // hypoteneus", c);
 */

// way to find hypotenuse by using HTML blocks
// Put below code to create HTML labels in HTML file
/* 
<label id="alabel">sideA:</label><br>
<input type="text" id="aTextBox"><br>
<label id="blabel">sideB:</label><br>
<input type="text" id="bTextBox"><br>
<button type="button" id="submitButton">submit</button>
<label for="cLabel"></label><br>

<script src="script.js" ></script> 
*/


document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = " Side C: " + c ;
}
