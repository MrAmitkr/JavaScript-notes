//Lesson 9-counter program  -----------------

// Put this code into HTML file in order to create three buttons 
/* 
<label id="countlabel">0</label>
<button id="decrease">decrease</button>
<button id="resetBtn">reset</button>
<button id="increase">increase</button>


 */

// and then write the code for javascript 

let count =0;

document.getElementById("decrease").onclick = function(){
    count -=1
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countlabel").innerHTML = count;    
}
document.getElementById("increase").onclick = function(){
    count +=1
    document.getElementById("countlabel").innerHTML = count;
  
}