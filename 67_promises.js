//Lesson 67_promises --------------------------- 

// promise = object that encapsulates the result of an asynchronous operation
// let asynchronous method return value like synchronous methods
// "T promise to return something in the future"
/* 
const promise = new Promise((resolve, reject) => {

    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");

    }
    else{
        reject("File NOT loaded");
    }

});

promise.then(value => console.log(value))
    .catch(error => console.log(error));

 */

// another example with setTimeout

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thansk for waiting"));
