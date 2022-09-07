//Lesson 6-const ---------------------------------

// const are variable that can't be change
// use 'const' keyword

const pi =3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2*pi*radius;

console.log("The circumference is ", circumference)