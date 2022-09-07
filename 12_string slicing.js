//Lesson 12-string slicing   ---------------------

// slice() extracts a section of a string
// and returns it as a new string
// without modifying the original string

let fullName = "amit sharma";
let firstName;
let lastName;
 
firstName = fullName.slice(0, 4); //it will display everything from 0 to 4
console.log(firstName);
 
lastName = fullName.slice(4); //it will display everything after 4th character
// if you didn't anything after the 4 in above code it will show everything from index zero to 4

console.log(lastName); 


// Another method for using string slicing


/* 
let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
//fullName.indexof(" ") will gives us the value of blank space which will use to check the first name character

lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/