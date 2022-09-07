//Lesson 3-arithmetic operations -------------------------

// arithmetic expression is a combination of....
// operands(values, variable, etc.)
//operator :
    // addition : +
    // subtraction : -
    // multiplication : *
    // division : / 
    // modulos : %
// They can be evaluated to value
// example y = x + 5 ;

let students =20;

students= students + 1;   // addition
students= students - 1;   // subtraction 
students= students * 1;   // multiplication
students= students / 2;   // division
students= students % 1;   // modulos : gives remainder after division
let extrastudents= students % 3;   // modulos example

 //augmented assignment operator

students += 1;
students -= 1;
students *= 1;
students /= 1;

console.log(students);
console.log(extrastudents);

/* 
operator precedence
1. parenthesis() //js gives high priority to parenthesis
2. exponents
3. multiplication & division
4. addition & subtraction
*/

let result = 1+2*(3+4); // first parenthesis going to solve
console.log(result); // Ans : 15
