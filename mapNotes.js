// let names = ["alice", "bob", "carol", "charlie"];

function printUpper(name) {
  //console.log(name.toUpperCase());
  return name.toUpperCase();
}

function ourMap(theArray, callback) {
  let result = [];
  let index = 0;
  while (index < theArray.length) {
    let item = theArray[index];
    result.push(callback(item));
    index = index + 1;
  }
  //will return undefined
  return result;
}

// let upperNames = ourMap(names, printUpper);
// console.log(upperNames);
// console.log(names);

let names = ["Alice", "Bob", "Carol", "Charlie"];

let upper = function (word) {
  return word.toUpperCase();
};

let bigNames = names.map(upper);
console.log(bigNames);

/* 
//*MAPS connect one set of values to another
    locOne = [44.4758, -73.2120]
    locTwo = [40.7306, -73.9352]
    locThree = [38.9070, -77.0367]
    map(something) => Location<Place>
    map(input) => Location<"Burlington, VT">
    map(input) => Location<"New York, NY">
*/
