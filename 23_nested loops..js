//Lesson 23_nested loops.   ------------------------

// nested loop = a loop inside of another loop

let symbol = window.prompt("enter a symbol to use");
let row = window.prompt("enter the number of rows");
let columns = window.prompt("enter the number of column")
// outer loop are incharge of the row
// inner loop are incharge of the column

// put this <label id="myrectrangle"></label> into HTML file to create label

for(let i =1; i<=row;i++){
    for(let j =1; j<=columns; j+=1){
       document.getElementById("myrectrangle").innerHTML +=symbol;
    }
    document.getElementById("myrectrangle").innerHTML  += "<br>"
}


// output : when we put row =3 and column =9
/*
*********
*********
********* 
*/