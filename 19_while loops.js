//Lesson 19_while loops  ------------------------

// while loop = repeat some code
// while some condition is true
// check the code again and again until the condition is true
// potential infinite

/* 
let username = " ";

while(username == " "){
    username = window.prompt("enter your name");
}
console.log("hello", username)
*/

let username = " ";

while(username == " "|| username == null){
    username = window.prompt("enter your name");
}
console.log("hello", username)

//
 
/* 

while(1 == 1){
    console.log("HElp!  I'm stuck in a infinite loop")
    
} */