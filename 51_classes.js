//Lesson 51_classes  -------------------------

// class = a blue print for creating objects
// define what properties and methods they have
// use a cosntructor for unique properties

class player{

    score =0;
    pause(){

        console.log("you passed the game");
    }
    exit(){
        console.log("you existed the game");
    }
}


const player1 = new player(); // we can create as many objects as we want
const player2 = new player();


player1.score += 1;
console.log(player1.score)

player1.pause();

// player1.exit();
player2.exit();