//Lesson 63_Date objects --------------------------- 

// The Date object is used to work with dates & times
// if we don't pass any argument then  // let date = new Date(); will show us the current date and time
/* 
let date = new Date(); 
*/

// let date = new Date(0); // this is a refence time 
// let date = new Date(2023, 1);
// format : year month = {month-1} date hours minute second millisecond
// let date = new Date("January 1, 2023 00:00:00");

let date = new Date();

/* 
let year = date.getFullYear();
let dayofMonth = date.getDate();
let dayofWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let millisecond = date.getMilliseconds();
*/

/* 
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
 */

function formatDate(date){

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`

}
function formatTime(date){

    let hours = date.getHours();
    let minutes = date.getMinutes() + 1;
    let seconds = date.getSeconds();
    
    let amorPm = hours >= 12? "pm" : "am" ;
    hours = (hours % 12) || 12 ;

    return `${hours}:${minutes}:${seconds}`

}

date = date.toLocaleString();
console.log(date);

document.getElementById("myLabel").innerHTML = seconds;


