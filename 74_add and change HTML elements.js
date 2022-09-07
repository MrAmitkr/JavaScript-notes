//lesson 74-add/change HTML element ---------------------

const nameTag = document.createElement("h1");

// Two ways in which i can add text to this nameTag
// way 1: .innerHTMl (vulnerable to XSS attacks)
// way 2: .textContent (more secure)

/* 
const nameTag = document.createElement("h1");
nameTag.innerHTML = "Bro" = window.prompt("enter your name");
document.body.append(nameTag); 
*/

// using .textContent
/* const nameTag = document.createElement("h1");
nameTag.textContent = "Bro" = window.prompt("enter your name");
document.body.append(nameTag); 
*/

const myList = document.querySelector("#fruit");
const listItem = document.createElement('li');
listItem.textContent = "mango";
listItem.append(listItem);

// use this when you want to add the item to the list
// listItem.append(listItem);

// use this when you want to add the item on the top of  the list
// listItem.prepend(listItem);

// if we want to place the item somewhere in the list

myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);