//Lesson 59_anonymous objects --------------------------- 

// anonymous objects = objects without a name
// Not directly referenced
// Less suntax. No need for unique names

class Card{
    constructor(value, suit){

        this.value = value;
        this.suit = suit;
    }
}

/* 
let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Diamond");
let card4 = new Card("A", "Clubs");

let card5 = new Card("2", "Hearts");
let card6 = new Card("2", "Spades");
let card7 = new Card("2", "Diamond");
let card8 = new Card("2", "Clubs");


let cards = [card1, card2, card3, card4, card5, card6, card7, card8 ];


console.log(card1.value + card1.suit);
console.log(cards[0].value + cards[0].suit);
 */

// Another way

new Card("A", "Hearts");
new Card("A", "Spades");
new Card("A", "Diamond");
new Card("A", "Clubs");
new Card("2", "Hearts");
new Card("2", "Spades");
new Card("2", "Diamond");
new Card("2", "Clubs");

let cards = [new Card("A", "Hearts"),
             new Card("A", "Spades"),
             new Card("A", "Diamond"),
             new Card("A", "Clubs"),
             new Card("2", "Hearts"),
             new Card("2", "Spades"),
             new Card("2", "Diamond"),
             new Card("2", "Clubs")
]

// since we don't have direct access to use these we we will use them with the help of array.

 console.log(cards[0].value + cards[0].suit); 
 
cards.forEach(card => console.log(`${card.value} ${card.suit}`));