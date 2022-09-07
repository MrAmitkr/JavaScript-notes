//Lesson 55_ super keyword  -------------------------

// super = refers to the parent class
// commonly used to invoke constructors of a parent class

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

class Rabbit extends Animal{

    constructor(name, age, runspeed){
       super(name, age);
        this.runspeed = runspeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 1, 40);
const hawk = new Hawk("hawk", 1, 40);


console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
