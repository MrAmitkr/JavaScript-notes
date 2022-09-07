//Lesson 43_sort an array of numbers  -------------------------

let grade = [100, 50, 90, 60, 80, 70];
grades = grades.sort(descendindSort);
grades = grades.sort(ascendindSort);
grades.forEach(print);

function descendindSort(x, y){

return y - x;

}
function ascendindSort(x, y){

return x - y;

}


function print(element){

    console.log(element);
}