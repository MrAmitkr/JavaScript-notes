//Lesson 29_format currency  -------------------------

// toLocateString() = return a string with a language sensitive representation of this
// number.toLocalString(locale, {options});
// 'locale' = specify that language (undefined = default set in browser)
// 'options' = objects with formatting options


let mynum = 123456.789;

// mynum = mynum.toLocaleString("en-US"); / US english
// mynum = mynum.toLocaleString("hi-IN"); // hindi
// mynum = mynum.toLocaleString("de-DE"); // standard german

//mynum = mynum.toLocaleString("en-US", {style: "currency", currency:"USD"}); 
// currency change to us dollar

// mynum = mynum.toLocaleString("hi-IN", {style: "currency", currency:"INR"}); 
// currency change to indian rupees

// mynum = mynum.toLocaleString("de-DE", {style: "currency", currency:"EUR"}); 
// currency change to standard german

// mynum = mynum.toLocaleString(undefined, {style: "percent"});
//convert the number into percentage

mynum = mynum.toLocaleString(undefined, {style: "unit", unit: "celsius"}); 
//convert number into celsius

console.log(mynum);