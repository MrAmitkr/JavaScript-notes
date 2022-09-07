//Lesson 18_NOT logical operator ❕  ------------------------

// ! NOT logical operator
// typical used to reverse a condition's boolean value
// true -> false and false -> true

/* 
// example without using NOT operator

let temp =15;
if(temp>0){

    console.log("it's warn outside");
}

else{

    console.log("it's cold ouutside");
} 

 */

// example using NOT operator

let temp =15;
let sunny = false;

if(! temp > 0){
    console.log("it's cold ouutside");
   
}
else{
    console.log("it's warn outside");
} 

if(sunny){
    console.log("it's sunny ouutside");

}
else{
    console.log("it's cloudy ouutside");
}

// use NOT operator

if(!sunny){
   
    console.log("it's cloudy ouutside");
}
else{
    console.log("it's sunny ouutside");

}