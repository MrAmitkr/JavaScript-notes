//Lesson 16_switches  ------------------------

// switched = statement that examines the value
// for a match against many case clauses
// for more efficient than many "else if" statement

//making a grade declaration programm using if and else

/* 
let grade ="A";

if(grade == "A"){
    console.log("you did great");
}
else if(grade == "B"){

    console.log("you did good");
}
else if(grade == "C"){

    console.log("you did");
}
else if(grade == "D"){

    console.log("you passed ...... barely");
}
else if(grade == "F"){

    console.log("you failed");
}

else 
{
    console.log(grade, "is not a letter grade")
}
 */

// same program using switch statemnt

/*

let grade = "C";


switch(grade)
{
    case "A" : 
    console.log("you did great");
    break;

    case "B" :
    console.log("you did good");
    break;
    
    case "C" :
    console.log("you did okay");
    break;
  
    case "D" :
    console.log("you passed ...... barely");
    break;
  
    case "F" :
    console.log("you failed");
    break;

    default :
    console.log(grade, " is not a letter grade");
}

 */

// using number to find grade declaration
let grade = 95;
    
switch(true)
{
    case grade >= 90: 
    console.log("you did great");
    break;

    case grade >=80 :
    console.log("you did good");
    break;
    
    case grade >=60 :
    console.log("you did okay");
    break;
  
    case grade >=40 :
    console.log("you passed ...... barely");
    break;
  
    case grade < 33 :
    console.log("you failed");
    break;

    default :
    console.log(grade, " is not a letter grade");
}
    
