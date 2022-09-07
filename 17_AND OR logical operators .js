//Lesson 17_AND OR logical operators && ||  ------------------------

// gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// !! OR (Either condition can be true)

/* 
let temp =15;

if(temp > 0 && temp < 30){
    console.log("the weather is good!");
}
else{
    console.log("the weather is bad");
}

 */

let temp =15;

if(temp <= 0 || temp >= 30){
    console.log("the weather is good!");
}
else{
    console.log("the weather is bad");
}

let sunny = true;

if(temp > 0 && temp < 30 && sunny){
    console.log("the weather is good!");
}
else{
    console.log("the weather is bad");
}

