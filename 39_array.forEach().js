//Lesson 39_array.forEach()   -------------------------

// array.forEach() = executes a provided callbacks function once for each array element


// method of .forEach() given below
/* 
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);

function capitalize(element, index, array){


    array[index] = element[0].toUpperCase() +  element.substring(1);
}

console.log(students[0]); 
*/

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){


    array[index] = element[0].toUpperCase() +  element.substring(1);
}

function print(element){
    console.log(element)

}

