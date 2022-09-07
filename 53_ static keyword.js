//Lesson 53_ static keyword  -------------------------


// static = belongs to the class, not the object
// properties: useful for caches, fixed configuration
// methods: useful for utility functions

class car{

    numberofcars = 0;
    constructor(model){
        this.model = model;
        this.numberofcars +=1 ;

    }
}

const car1 = new car("mustang");
const car2 = new car("corvette");
const car3 = new car("BMW");

console.log(car1.numberofcars);
console.log(car2.numberofcars);
console.log(car3.numberofcars);