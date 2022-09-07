//Lesson 70_ES6 Modules ---------------------------

// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code of use whenever
// Gret for any general utility values and functions
// Helps to make your code reusable and maintainable
// Think of modiles as seperates chapters of book


// in order to begin with modules code type below HTML code in HTML file
/* 
<script type="module" src="script.js" ></script>
*/
// then create a new javascript file

// and then write code in the format with export function
// these code can be in the format of
/* 
export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}
 */


/* 
const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

function getArea(radius){
    return PI * radius * radius;
} */

// and then to import this file

import {PI, getCircumference, getArea} from "./math_util.js"

console.log(PI)