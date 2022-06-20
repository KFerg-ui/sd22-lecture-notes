//SLICE

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits.slice(1, 3));
// this returns 'banana', and 'cherry'
// .slice acts BEFORE the index #
// console.log(fruits.slice(1,-2))
// returns banana/cherry as well
// -2 counts back from the end of the array
// console.log(fruits.slice(1, -5))
// returns nothing bc the -5 shaves out past zero...
//can't "like loop back on itself"
// console.log(fruits.slice(-5, -1))
//returns apple, banana, cherry, date
//bc start is before 0, so includes all except -1 which is elderberry

// 0   1   2   3   4
// | B | L | U | E
// ['B','L','U','E']
//vertical lines are "fences"
//.slice always gets what's between the fences
//index is always fence-right

// let word = ['B','L','U','E'];
// console.log(word.slice(1,2));

// let subFruits = fruits.slice(1,3);
// console.log(fruits);
// console.log(subFruits);

// subFruits.push('dragon fruit', 'kiwi')
// console.log(fruits);
// console.log(subFruits);

//*ARRAY TO STRING
let fullName = ["Bob", "Saget"];
console.log(fullName.join());
console.log(fullName.join(" "));
console.log(fullName.join(" and "));
console.log(fullName.join("$$$"));
//these elements are added BETWEEN items in array
//like glue

//*STRING TO ARRAY
let phrase = "fuckin good dog bro";
let phraseWords = phrase.split(" ");
console.log(phraseWords);
//notice the split happens at the spaces, bc that's what's in ()
//phraseWords is now an array, so you can index words
console.log(phraseWords[0]);

//*
function assert(message, thingToRun, expectedValue) {
  if (thingToRun() === expectedValue) {
    console.log(`pass, ${thingToRun}===${expectedValue}`);
  } else {
    console.log(`fail, ${thingToRun} !== ${expectedValue}`);
  }
}

assert("includes 42", includes(myArray, 42), true);
