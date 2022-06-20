

function includes (someArray, someItem) {
    let index = 0
    while (index<someArray.length) {
        let item = someArray[index];
        if (item === someItem) return true;
        index = index + 1
    }
return false 
}

module.exports = { includes };

// function assert(message, thingToRun, expectedValue){
//     if (thingToRun===expectedValue) {
//         console.log(`pass, ${thingToRun}===${expectedValue}`)
//     } else {
//         console.log(`fail, ${thingToRun} !== ${expectedValue}`)
//     }
// }
let realTalk = [78, "bears", "ice cubes", false, 9, 42];

console.log(includes(realTalk, 9))

// assert("includes 42", includes(realTalk, 42), true)