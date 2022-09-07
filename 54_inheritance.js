//Lesson 54_inheritance  -------------------------


// inheritance = a child class can inherit all the :
// method and propertires from another class

/*

class rabbit{

    alive = true;
    name = "rabbit";

    eat(){

        console.log(`This ${this.name} is eating`);
    }
    sleep(){

        console.log(`This ${this.name} is sleeping`);
    }
    run(){

        console.log(`This ${this.name} is running`);
    }

}

class fish{

    alive = true;
    name = "fish";

    eat(){

        console.log(`This ${this.name} is eating`);
    }
    sleep(){

        console.log(`This ${this.name} is sleeping`);
    }
    swim(){

        console.log(`This ${this.name} is swimming`);
    }

}

class hawk{

    alive = true;
    name = "hawk";

    eat(){

        console.log(`This ${this.name} is eating`);
    }
    sleep(){

        console.log(`This ${this.name} is sleeping`);
    }
    fly(){

        console.log(`This ${this.name} is flying`);
    }

}
*/

// in order to reduce the need to write same property of code
// we will use inheritance

// lets create parent class and rabbit, fish and hawk as children class

class animals{  
    alive = true;

    eat(){

        console.log(`This ${this.name} is eating`);
    }
    sleep(){

        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends animals{

    
    name = "rabbit";
 
    run(){

        console.log(`This ${this.name} is running`);
    }

}

class Fish extends animals{

    name = "fish";

    swim(){

        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends animals{


    name = "hawk";

    fly(){

        console.log(`This ${this.name} is flying`);
    }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
