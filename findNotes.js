let names = ["Alice", "Bob", "Carol", "Charlie"];

let beginsWithC = function (word) {
  return word.charAt(0).toUpperCase() === "C";
  //
};

console.log(beginsWithC("Carol"));
//returns true

//* FIND INLINE functions

let cName = names.find(function (word) {
  return word.charAt(0).toUpperCase() === "C";
});

//* When function returns TRUE .find returns the NAME
//* that satisfied the condition

console.log(cName);
// returns "Carol"
// weird-ass syntax that is harder for the eyes.
//avoid in the beginning for sure.
//'0' is a 'predicate condition'...
