//Lesson 2-variables--------------------------

//A variable is a container for storing data
// A variable behaves as if it was the value that it contains

//Two steps:
//1.Declaration(var, let,const)
//2.Assignment(=assignment operator)

// when assigning var dont use double quotes becasue its going to print the value
// when writing number data type don't use double/single quotes 

//Number data type example

let age ;
age = 21;
// or let age =21;
age=age+1;
console.log("you are" ,age, "year old"); 

//string data type example : string is a series of character

let firstname = "amit" 
console.log("hello",firstname);

//boolean example : true or falsse

let student =false;
console.log("Enrolled", student)


// write <p id="p1"></p>
// then type document.getElementById("p1").innerHTML  =  to link with p1 in html

document.getElementById("p1").innerHTML = "hello" + firstname;
document.getElementById("p2").innerHTML = "you are" + age + "year old";
document.getElementById("p3").innerHTML = "Enrolled", student;

//summary : 
//let firstname = "amit" //string
//let age = 21 ; //number
//let student =false; //booelan
