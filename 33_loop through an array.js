//Lesson 33_loop through an array  -------------------------


let prices = [5, 10, 15, 20];

for(let i =0; i< prices.length; i+=1){
    console.log(prices[i]);
}

// to iterate backwards

for(let i = prices.length - 1 ; i>= 0 ; i-=1){
    console.log(prices[i]);
}

// another way to iterate loop statement

for(let price of prices){

    console.log(price);
}
