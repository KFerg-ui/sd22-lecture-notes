function reverseArray(someArray) { 
    // if the someArray is empty
        //return a new empty array
    if (someArray.length === 0) return [];
    //for every item in someArray
    let index = 0;
    let result = [];
    while (index<someArray.length) {     
        let item = someArray[index];
        result.unshift(item)
        index = index + 1
    }
    return result;
    //  insert the item into the new array
            //in reverse order from someArray
    //return new array
  
}


//console.log(reverseArray(petList))
let petList = ['cat', 'dog', 'bird', 'snake'];
let nameList = ['joshua', 'matt', 'dave', 'paul'];
let singleList = ['cake'];

function assert(message, thingToRun, expectedValue){
    if (thingToRun===expectedValue) {
        console.log(`${message} is a pass`, `${thingToRun}===${expectedValue}`)
    } else {
        console.log(`${message} is a fail`, `${thingToRun} !== ${expectedValue}`)
    }
}

function compare(arrayOne, arrayTwo) {
    return arrayOne.join() === arrayTwo.join();
}

assert("with petList", reverseArray(petList), ['snake', 'bird', 'dog', 'cat'])
assert("with nameList", reverseArray(nameList), ['paul', 'dave', 'matt', 'joshua'])
assert("with singleList", reverseArray(singleList), ['cake']); //['cake']

//* OLD METHOD (Broken)
//We want to switch the direction of the index numbers
  //currentIndex-(finalIndex)=negative number
    //with number value we want.
//   let index = 0
//   while (index < someArray.length) {
//     newIndex === Math.abs(someArray[index] - (someArray.length-1));
    // console.log(newIndex.typeOf);
    //someArray.unshift(someArray[i]);
    // someArray.pop()
    // reversedPetsList.unshift()
    // let reversedPetsList[newIndex]= someArray[i]
//     index = index +1 
//   }
// return reversedPetsList