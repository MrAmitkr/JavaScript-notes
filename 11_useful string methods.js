//Lesson 11-useful string methods  ---------------------

let username = "amitsharma";
let phonenumber = "123-456-7890";
username.length //gives us how many characters are in the string
console.log(username.length)


username.charAt(0); // gives the character at a given index
console.log(username.charAt(3))


username.indexOf("t") // gives the index/position of given character
console.log(username.indexOf("t"))


username.lastIndexOf("a"); //gives the position of certain character from the last 
console.log(username.lastIndexOf("a"));


username = username.trim(); // this will trim all the empty spaces in the string
console.log(username = username.trim());


username = username.toUpperCase(); // this will gives all the value of string in uppercase
console.log(username = username.toUpperCase());


username = username.toLowerCase(); // this will gives all the value of string in lowercase
console.log(username = username.toLowerCase());


phonenumber = phonenumber.replaceAll("-","/") // this will replace all the character on the first side with second side
console.log(phonenumber = phonenumber.replaceAll("-","/"));
