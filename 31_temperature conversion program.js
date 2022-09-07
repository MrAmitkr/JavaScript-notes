//Lesson 31_temperature conversion program  -------------------------

// In order to create this code write below HTML code in HTML file
/* 
<label >enter a tempreture</label><br>
<input type="text" id="textBox"><br>    
<label>convert to:</label>
<input type="radio" id = "cButton" name = "unit">
<label>celsius:</label>
<input type="radio" id = "fButton" name = "unit">
<label>fahrenheit:</label>
<button type="button" id="submitButton"></button>
<label id="tempLabel"></label>

 */

document.getElementById("submitButton").onclick = function  (){
    let temp;

    if(document.getElementById("cButton").checked) {
         temp = document.getElementById("textBox").value;
         temp = Number(temp);
         temp = toCelsius(temp);
         document.getElementById("tempLabel").innerHTML = temp + "°c" ;
 
    }
    else if(document.getElementById(fButton).checked){
     temp = document.getElementById("textBox").value;
     temp = Number(temp);
     temp = tofahrenheit(temp);
     document.getElementById("tempLabel").innerHTML = temp + "°f" ;
 
    }
    else{
         document.getElementById("tempLabel").innerHTML = " select a unit" ; 
    }
 }
 
 
/*
  temp =  toCelsius(temp);  // invoke of function
 console.log(temp); 
 */
 
 function toCelsius(temp){
 
     return (temp-32) * (5/9);
 }
 
 function tofahrenheit(){
 
     return temp * 9/5 + 32;

 }