//Lesson 73_DOM traversal ---------------------------

// let say we have a list in the body of HTML file
// Each has unique id
/*
 <ul id="fruits">
<li>apple</li>
<li>orange</li>
<li>banana</li>
</ul>
<ul id="vegetables">
<li>carrot</li>
<li>potatoes</li>
<li>onions</li>
</ul>
<ul id="dessert">
<li>ice cream</li>
<li>cake</li>
<li>pie</li>
</ul> 
*/


// let say we want to select body of document
/*
 let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";
*/

// let say we want to select last element child of the body 
/* 
let element = document.body;
let child = element.lastElementChild;
console.log('child');
child.style.backgroundColor = "lightgreen"; 
*/

// let day we want to select our vegetable list

/* 
let element = document.querySelector("#vegetables");
*/

// if we want to select
 // .parent element
 
/* 
let element = document.querySelector("#vegetables");
let parent = element.parentElement;
parent.style.backgroundColor = " lightgreen" 
*/

  // .nextElementSibling
/* 
let element = document.querySelector("#vegetables");
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = " lightgreen"
*/

  // .previousElementSibling
/* 
let element = document.querySelector("#vegetables");
let parent = element.previousElementSibling;
parent.style.backgroundColor = " lightgreen" 
*/

  // way to acess the .children
/* 
let element = document.querySelector("#vegetables");
let child = element.lastElementChild;
child.style.backgroundColor = " lightgreen"   
*/

  // Array children at an index
/*  
let element = document.querySelector("#vegetables");
let child = element.children[1];
child.style.backgroundColor = " lightgreen"  
 */
  // Array from (.children)


  let element = document.querySelector("#vegetables");
  let children = Array.from(element.children);
  children.forEach(child =>  child.style.backgroundColor = " lightgreen"   )