//Lesson 35_2D arrays  -------------------------

// 2D array = An  array of array
// also known as multi dimensional array

let fruits =["apples","oranges","banana"];

let vegetables =  ["carrots","onions","potatoes"];
let meat = ["eggs", "chicken", "fish"];

// to add this array lets create individual array in one array

let grocerylist = [fruits, vegetables, meat];

// structure of 2D array
// first index for rows
// second index for columns

grocerylist[0][0] = "mangoes";
grocerylist[0][2] = "streak";

for(let list of grocerylist){
    for(let food of list){
        console.log(food);
    }
   
}


