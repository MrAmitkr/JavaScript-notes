//Lesson 15_checked property  ---------------------

// write below HTML codes to create label and subscribe button 

/* <label for="mycheckbox">subscribe</label>
<input type="checkbox" id="mycheckbox"><br>
<button id="myButton">submit</button>
 */

/* 
document.getElementById("myButton").onclick = function(){


    if( document.getElementById("mycheckbox").checked == true)
    {
        console.log("you are subscribed")
    }

    else
    {
        console.log("you are not subscribed")

    }
}

*/


//  Another example

// write this is in HTML to create label for checkbox, visa, master,paypal

/*
 <label for="mycheckbox">subscribe</label>
<input type="checkbox" id="mycheckbox"><br>
<label for="visabtn">visa</label>
<input type="radio" name="card" id="visabtn"><br>
<label for="masterbtn">master</label>
<input type="radio" name="card" id="masterbtn"><br>
<label for="paybtn">paypal</label>
<input type="radio" name="card" id="paybtn"><br>
<button id="myButton">submit</button> 
*/

document.getElementById("myButton").onclick = function(){

    const myCheckbox = document.getElementById("mycheckbox");
    const visabtn = document.getElementById("visabtn");
    const masterbtn = document.getElementById("masterbtn");
    const paybtn = document.getElementById("paybtn");   
    
    if( myCheckbox.checked == true)
    {
        console.log("you are subscribed");
    }
    else
    {
        console.log("you are not subscribed");
    }
    if( visabtn.checked == true)
    {
        console.log("you are paying with visa");
    }
    else if(masterbtn.checked )
    {
        console.log("you are paying with masterbtn");
    }
    else if(paybtn.checked )
    {
        console.log("you are paying paypal");
    }
    else{
    console.log("nothing is selected");
    
    }
    }