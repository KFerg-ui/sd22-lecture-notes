let names = ["alice", "bob", "carol", "charlie"];

function printUpper(name) {
  console.log(name.toUpperCase());
}

function upperLast(name) {
  let firstLetters = name.slice(0, name.length - 1);
  //slices beginning of the name
  let lastLetter = name[name.length - 1].toUpperCase();
  //USES last index of the name
  //BOTH of these 'lets' are calling a thing from the string
  //just using different methods
  let finalWord = firstLetters + lastLetter;
  console.log(finalWord);
  return finalWord;
  //MUST use return or the function will return undefined
}

console.log(names.forEach(upperLast));
//console.log(names.forEach(printUpper));

//*PURE functions

function addOne(someNumber) {
  return someNumber + 1;
}

function sum(left, right) {
  return left + right;
}
/* ['alice', 'bob','carol', 'charlie']
    alice
forEach(printUpper)
    ->
    printUpper('alice') 
        ->
        console.log(VALUE) 
            - 'alice'.toUpperCase()

//* TAKES EACH ELEMENT & RUNS IT THRU printUpper FUNCTION
*/
