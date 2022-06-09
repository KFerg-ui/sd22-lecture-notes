/* FUNCTIONS

~ A function is a block of reusable code that can take in PARAMETERS,
perform an ACTION, and return a RESULT 

~ Organize code blocks into sections.

~ Two types, Declarations and Expressions
    ~ Default undefined unless explicitly identified

~ Syntax 
    keyword functionName ( parameter1, parameter2 ) { code block }
    EXAMPLE:    function sayHello() {
                console.log("Hello!");
                            }
    SQUIGGLY BRACES
*/

function sayHello() 
{console.log("Hello!");}

sayHello () 

/*
Can't just DECLARE functions. You must CALL them. 
*/

function fxDeclaration() {
    return "This is a function declaration's return statement"
}

fxDeclaration()
//This will not put anything in the console log, but it WILL RETURN SOMETHING.

console.log(fxDeclaration())
//This will put something in the log when it runs the function.

let displayData = fxDeclaration()
console.log(displayData)

//console log is only used to display info to the dev, not to get data out of the function
//RETURN statements are data, regardless of whether they're in the console log

function greetUser(fName) {
    return `Good day, ${fName}`
}

console.log(greetUser("Kyle Ferguson"))
console.log(greetUser())
//second one will return undefined
// fName is a Parameter - like a door to let the argument in
//"Kyle Ferguson" is an Argument - walking through the door

function shouter(someString) {
    let loudString = someString.toUpperCase();
  
    return loudString + "!!!";
  }

  console.log(shouter("fuckin bruh"))

 // Passing variables as Arguments

 let user1 = "Dot"

 console.log(greetUser(user1))

 //

 function capStrings(string){
     return string.toUpperCase()
 }

 console.log(capStrings(user1))

 let user3 = "papa roach"
 let usersCapName = capStrings(user3)

 console.log(usersCapName)

 /* FUNCTION EXPRESSION
 
    Uses variable as a placeholder */

let myDog = function(dogName, dogBreed) {
    return `My dog, ${dogName} is a ${dogBreed}`
}

console.log(myDog("JJ", "Pit"))

/* Arrow Functions

concise functions, expressions ONLY 
do not bind to .this or super*/

//concise body arrow function
/* can only have one parameter if no paren
    can have implicit return statement ONLY without using {} */

let greetEveryone = () => console.log("hello class!")

greetEveryone()

// with single parameter functions you can just put the variable in w/o paren, as below

let greetPerson = person => console.log(`Hello ${person}`)

greetPerson ("Kyyyyyle")

//Block Body Arrow Function

let sendEmail = (email, name) => {
    let greet = "Heyyyyyyyyy"
    return `${greet} ${name},
    
    We've been trying to reach you.\n
    TRYING.\n
    OK?\n
    ${name}`
}

console.log(sendEmail("email@email.com", "d-bag"))

// CHALLENGE - create arrow fxn "tipCalculator"
    //pre tax bill and tip percentage as parameters
    //bill total and tip amount

    let tipCalculator = (preTax, tipPercentage, salesTax) => {
        let taxAmount = preTax * salesTax
        let taxTotal = preTax + taxAmount
        let tip = taxTotal * tipPercentage
        let fullTotal = taxTotal + tip 
        return `The bill is ${preTax} and the Tax comes to ${taxAmount.toFixed(2)}, so the total after tax is ${taxTotal}.\n 20% tip is ${tip.toFixed(2)}, so all in it's ${fullTotal}.`}
        
        console.log(tipCalculator(100, .2, .07))
    
        
        
// toFixed() limits the number of decimal points a function returns, helps eliminate the wild variables and ugly returns.

//PRACTICE

let addOne = (numm) => (numm+1)

console.log(addOne(-4))

/* Write a function that:

accepts three arguments, a starting age, an amount per day, and an item name
calculates the amount of items used over the course of the rest of your life
based on a 100 year constant max age
Outputs "You will need Number Items to last the rest of your life." */

let lifeMany = (startAge, amtPerDiem, itemName) => {
    let yearsLeft = 100-startAge
    let amtPerLife = yearsLeft*365*amtPerDiem

    return `You will need at least ${amtPerLife} ${itemName}s to make it outta here...`}

    console.log(lifeMany(20, 3, "cookie"))

let madLibs = (sub, act, obj) => `${sub} ${act}ed the ${obj}`

console.log(madLibs("kyle", "push", "paper"))

// Reference errors are often hoisting errors. Variables are always hoisted, declarations are not. (??)