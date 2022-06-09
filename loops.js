// *LOOPS
    //statement that repeatedly executed a code block

/* 
*Allow us to go over a block of code a determined amount of cycles
*Expressions in loop statements provide info like start/stop/what to do between repetitions
*Possible to write code w/o declaring an endpoint.... 
*/

// * While Loop: Same structure as "If" statement
    // * keyword(boolean expression) {code block}
    // * executes statement inside code block as long as condition remains true


let randomInt = 75

while (randomInt > 0) {
    //conditional checks if it's true
    randomInt = randomInt - 1
    //minus 1 reassigns value for randomInt
    console.log(randomInt)
}

//code will run until conditional resolves to False - FALSE IS THE STOP CONDITION


//* THIS IS AN INFINITE LOOP
//  while (true) {
  //  randomInt = randomInt + 1
  //    console.log(randomInt)
//      }

// * KILL AN INFINITE LOOP - Control+C

/* 
*FOR loops
    * have to setup our loop where we can 
        *  see where we are in the loop
        * consider the condition we run it against
        * not when we are done with that condition
    let's count to 100 */

for(let i= 0; i<= 10; i++) {
// start condition; stop condition; steps through loop
    console.log(i)}
    // function to perform while conditions are true

// *DIFFERENCE BETWEEN WHILE AND FOR 
    //need some more on this.... 
let longWord = "Supercalifragilisticexpialidocious"   

for (i = 0; i < 34; i++) {
    //start; stop; step
    console.log(longWord[i], i)
    //grab index of each letter in the word, i is index
        //gives list of letters (by index) and the index (number) alongside
} 

/*
*FOR...IN

for(variable IN somewhere)
great for anything index or number related
*/
for(i in longWord) {
    console.log(i)
}

/* 
*For OF
great for iterable objects */

let list = ["milk", "eggs", "cookies"]
for (i of list) {
    console.log(i)
}

// * For In and For Of loops iterate for the length of the iterable. (Can't change the length.)

let number = "2152902681"
for (i of number) {
    console.log(i)
}

/*
DO...WHILE 
First executes code in the DO section, WHILE condition remains TRUE
*/
let j = 0
do {
    console.log(longWord[j])
    j++
} while (j < longWord.length)