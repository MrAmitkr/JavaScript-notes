//Lesson 65_asynchronous --------------------------- 

// synchronous code = In an ordered sequence.
// step by step linear function
// (start now,  finish now)

// asynchronous code = Out of sequence.
// Ex. Access is database
// fetch a file
// Tasks that take time
// (start now, finish sometimes later)

console.log("START");

// asynchronous code 
setTimeout(() => console.log("This is asynchronous"), 5000); 
console.log("This step is synchronous");
console.log("END");