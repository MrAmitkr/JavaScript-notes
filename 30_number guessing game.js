//Lesson 30_number guessing game  -------------------------


// in order to make number guessing game
// put below code into HTML in order to make label and submit button

/* <h1>Number gessing game</h1>
<p>pick a numer between 1 to 10</p>
<label >enter a guess</label>
<input id="guessfield">
<input type="submit"  id="submitButton">
 */

// and then write this code in java script
const answer = Math.floor(Math.random()*10 + 1)
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

let guess = document.getElementById("guessfield").value;
guesses += 1;

if(guess == answer){

    alert(`${answer} is the number, It took you ${guesses} guess`)
}
else if(guess<answer){
    alert("too small");
}
else{
    alert("too large!");
}
}
