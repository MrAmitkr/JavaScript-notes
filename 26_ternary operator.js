//Lesson 26_ternary operator  -------------------------

// ternary operator = shortcut for an 'if/else statement'
// takes 3 operands
// 1. a condition with ?
// 2. expression if true :
// 3. expression if false 

// condition ? exprIfTrue : exprIfFalse

/* 
let adult = checkAge(21);

console.log("adult");

function checkAge(age){

   if(age >=18){
    return true;
   }
   else{
    return false;
   }
}
 */

let adult = checkAge(21);

console.log("adult");

function checkAge(age){
    return age >=18 ? true : false; // condition ? exprIfTrue :                                  exprIfFalse
}

checkwinner(false);

function checkwinner(win){
    win ? console.log('you win!') : console.log('you loose')

}