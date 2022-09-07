//Lesson 22_break and continue statements   ------------------------

// break = break out of loop entirely
// continue = skip an iteration of a loop

// this example going to break the sequence at 13
for(let i =1; i<=20 ; i +=1){
    if(i==13){
        break;
    }
console.log(i);
}

// this example going to print everything except 13

for(let i =1; i<=20 ; i +=1){
    if(i==13){
        continue;
    }
console.log(i);
}