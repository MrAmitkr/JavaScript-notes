

// setInnterval() = invoke a function repeatedly after a number of millisecond
// asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("count up to what #?");
max = Number(max);

const myTimer=setInterval(countUP, 1000);

function countUP(){
    count +=1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}