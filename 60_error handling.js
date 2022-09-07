//Lesson 60_error handling --------------------------- 

// error = object with a descripition of somwthing went wrong
// can't open a file
// loose connection
// user type incorrect input
// type error

// sometimes something went wrong but it doesn't throw error
// then we use throw function
// throw = executes a user- defined error

try{
    let x = window.prompt("enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";

    if (x == "") throw "that was empty";
    console.log(`${x} is a number`);
}

catch(error){
    console.log(error);
}

// finally will always execute doesn't matter if your code is sucessful or not

finally{
    console.log("this always executes")
}