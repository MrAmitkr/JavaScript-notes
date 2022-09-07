//Lesson 42_array.reduce()   -------------------------

// array.reduced() = reduces an array to a single values

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`the total is ${total}`);


function checkOut(total, element){
    return total + element;
}