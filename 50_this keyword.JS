//Lesson 50_this keyword  -------------------------

// this = reference to a particular object
// the object depend on immediate context

/* 
const car1 ={
    model: "Mustang",  //properties of an object
    color: "red",      //properties of an object
    year: 2023,        //properties of an object

    drive: function(){                          //method of an object
        console.log(`you drive the ${this.model}`); // this is just an refernce to a object we are working with
    },
}

const car2 ={
    model: "Corvette",  //properties of an object
    color: "blue",      //properties of an object
    year: 2024,        //properties of an object

    drive: function(){                          //method of an object
        console.log(`you drive the car ${this.model}`);
    },
 
}

car1.drive();
car2.drive();
 */

this.name = "mycoolwindows";
console.log(this);  // this will represent the windows property