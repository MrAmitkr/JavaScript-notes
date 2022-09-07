//Lesson 71_DOM ---------------------------

// DOM = Document Object Model(API)
// An interface for changing the content of page

// Document is the entry point of the DOM
// console.dir(document); // this will list all the property of Document

console.log(document.title);
console.log(document.URL);

document.title = "Title goes here!";
document.location = "http://www.google.com";
document.body.style.backgroungColor = "skyblue";

// in order to modify any title element in the HTML file use below code
document.getElementById("myDiv").innerHTML = "hello";