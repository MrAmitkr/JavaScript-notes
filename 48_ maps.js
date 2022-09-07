//Lesson 48_maps  -------------------------

// Map = objects that holds key-value pairs of any data


const store = new Map([
    ["tshirt", 20],
    ["jeans", 30],
    ["socks",10],
    ["underwear", 50]
]);

// below code is solved by get method
/*
 let shoppingcart =0;
shoppingcart += store.get("tshirt");
shoppingcart += store.get("underwear");
console.log(shoppingcart);
store.forEach((value, key) => console.log(`${key} $${value}`));
 */

// below code is d=solved by set method
/* store.get("tshirt"); // get method
store.set("hat",40);  // set method
store.delete("hat");  // delete method 
console.log(store.size); // size method
//store.log(store.has("underwear"));

*/

store.forEach((value, key) => console.log(`${key} $${value}`));

