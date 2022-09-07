//Lesson 45_arrow function expressions  -------------------------

// arroe function = compact alternative to a traditional function
// expression:  =>

/* 
const greeting = function(username){
    console.log(`hello ${username}`);
}
greeting("amit")
 */

// note : You do need curly braces {} if your function uses nore than 1 statement


/* 
const greeting = (username)  => console.log(`hello ${username}`)
greeting("amit"); 


*/

/* const percent = function(x, y){
    return x / y * 100;
}
console.log(`${percent(37,50)}%`); 
*/


// using arrow function

/* 
const percent = (x, y) =>  x / y * 100;
console.log(`${percent(37,50)}%`);  
*/

// another example

/* 
let grade = [100, 50, 90, 60, 80, 70];

grade.sort(descending);
grade.forEach(print);


function descending(x, y){
    return y -x ;
}

function print(element){
console.log(element);
}
 */

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x );
grades.forEach((element) => console.log(element)) ;