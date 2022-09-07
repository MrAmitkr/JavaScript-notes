//Lesson 72_element selector ---------------------------


// let se we have a heading on HTML file with given id

/* 
<h1 id="myTitle">This is the menu</h1>
 */

// to select this Element

let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

// let say we have three radio buttons in our HTML file
/* 
  <input type="radio" name="fruits" value="apple" checked="checked">
  <label for="apple">apple</label>
  <input type="radio" name="fruits" value="oranges"checked="checked">
  <label for="orange">orange</label>
  <input type="radio" name="fruits" value="banana"checked="checked">
  <label for="banana">banana</label>            
 */

// and we want to select them all
// use document.getElementsByName
// here instead of Element we use Elements 
/* 
let fruits = document.getElementsByName("fruits");
console.log(fruits[0]);


fruits.forEach(fruit => {
  if(fruit.checked){
        console.log(fruit.value);
    }
})
 */

//Below is the example document.getElementsbyTagName
// let say we have a vegetable list in our HTML file
/* 
<ul>
<li>carrots</li>
<li>potatoes</li>
<li>onions</li>
</ul> 
*/

// in order to select the vegetable list by tags
// we use document.getElementsByTagName
/* 
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";

 */

// let say we have an dessert list in our HTML file
/* 
<div class="desserts">ice cream</div>
<div class="desserts">cake</div>
<div class="desserts">pie</div>
 */
// and we want to store it
// Below code is the example of getElementsByClassName
/* 
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen"
 */

// Below is the example of querySelector
/* 
let element = document.querySelector(".desserts");
element.style.backgroundColor = "lightgreen";\
*/

// Below is the example of getElementsby Ids
/*
let element = document.querySelector("#myTitle");
element.style.backgroundColor = "lightgreen";
 */

// Below is the example of selecting an element  by getElementsby classname
/*
 let element = document.querySelector(".desserts");
element.style.backgroundColor = "lightgreen";
 */


// Below is the example of selecting an element by Tag names
/* 
let element = document.querySelector("li");
element.style.backgroundColor = "lightgreen";
 */

// using for element so the first element in the list gets selected
/* 
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";
 */

// Below is the example of selecting an element when we want to select all
let element = document.querySelectorAll(".desserts");
element.forEach(element => {
 element.style.backgroundColor = "lightgreen"
})

