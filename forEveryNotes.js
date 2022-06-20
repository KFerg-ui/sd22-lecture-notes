//let names = ["alice", "bob", "carol", "charlie"];

function printUpper(name) {
  console.log(name.toUpperCase());
}

function forEvery(theArray, callback) {
  let index = 0;
  while (index < theArray.length) {
    let item = theArray[index];
    callback(item);
    index = index + 1;
  }
  //will return undefined
}

//*CALL HERE
//forEvery(names, printUpper);
