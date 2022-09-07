//Lesson 47_nested functions  -------------------------

// nested function = function inside other function.
// outer functions have access to inner functions
// inner functiond are "hidden" from outside the outer function
// used in closures


/* 
let username = "amit";
let userInbox = 0;

displayusername();
displayuserinbox();

function login(){
    displayusername();
    displayuserinbox();
}

function displayusername(){
    console.log(`welcome ${username}`)
}

function displayuserinbox(){
    console.log(`you have ${userInbox} new message`);
} 
*/

// Another way of writing this

let username = "amit";
let userInbox = 0;

login();

function login(){
    displayusername();
    displayuserinbox();


function displayusername(){
    console.log(`welcome ${username}`)
}

function displayuserinbox(){
    console.log(`you have ${userInbox} new message`);
}
}