//Lesson 37_rest parameters   -------------------------

// rest parameters = represents an indefinite number
// we use  ...      of parameters in rest parameter
//                  (packs arguments into an array)

let a =1;

let b =2;

let c =3;

let d =4;

let e =5;


// in  order to get the sum of miltiple function we need to declare function with different paramerters

/* 

console.log(sum(a, b));

function sum1(a, b){

    return a + b ;
}

function sum2(a, b, c){
    return a + b + c;
}
function sum3(a, b, c, d){

    a + b + c + d;
}

 */

// with the help of rest parameter

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of number){
        total += number
    }
    return total;
}