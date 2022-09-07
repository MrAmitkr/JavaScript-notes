
//Lesson 4-user input ---------------------------------

// User input function receives the user input from the keyboard and stores it into a variable name.

// how to accept user input
    // 1. easy way with windows prompt
//executed code easy way with windows prompt

let username = window.prompt("what is your name");
console.log(username); 

    // 2. difficult way HTML textbook
//write this code is body section of html to create form and button

/* 
<label>enter your name</label>
    <br>
    <input type="text" id="mytext"><br>
    <button type="button" id="my button">submit</button>
    <script src="script.js" ></script>
 
 */

//and then write below line in javascript


document.getElementById("my button").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
}

//Put this into HTML file
//if we put <label id="mylabel"> we will create an id for our label

/* 
<label id="mylabel">enter your name</label>
<br>
<input type="text" id="mytext"><br>
<button type="button" id="my button">submit</button>
<script src="script.js" ></script>

 */

/* let username;
document.getElementById("my button").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
document.getElementById("mylabel").innerHTML = "hello" + username; // this will change enter your name to entered name
}
 */