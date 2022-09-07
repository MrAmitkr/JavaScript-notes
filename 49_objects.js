//Lesson 49_objects  -------------------------

// objects = a group of properties mand methods
// properties = what an object has
// method = what an object can do
// use . to acess properties/methods

const car1 ={
    model: "Mustang",  //properties of an object
    color: "red",      //properties of an object
    year: 2023,        //properties of an object

    drive: function(){                          //method of an object
        console.log("you drive the car");
    },
    brake: function(){                          //method of an object
        console.log("you step on the brakes");
    }
}

const car2 ={
    model: "Corvette",  //properties of an object
    color: "blue",      //properties of an object
    year: 2024,        //properties of an object

    drive: function(){                          //method of an object
        console.log("you drive the car");
    },
    brake: function(){                          //method of an object
        console.log("you step on the brakes");
    }
}


console.log(car1.model);
console.log(car1.color);
car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
car2.drive();
car2.brake();

