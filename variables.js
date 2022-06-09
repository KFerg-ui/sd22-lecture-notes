/*VARIABLES

Containers that store data in memory. (RAM). Every time you create a variable there 
is a placeholder to access it. 

They consist of:
    - Declaration 
        - Allows memory space to be reserved
        - Start with let, var, const
        - Cannot start w a number or most characters besides $ or _
        - Default value is undefined (except const)
        - Weakly typed language (no need to declare data type)
    - Initialization
        - Assigning a value to the variable
    - Argument 
*/

let firstName = "Kyle";
console.log(firstName)

lastName = "Ferguson";
console.log(lastName)

var age = 39
console.log(age)
//var is an old term, it comes up but just use let

const isStudent = true;
console.log(isStudent)
//const is for constants that you don't want to change at all.
//const is "immutable", it must ALWAYS be declared AND initialized.

let x = 8
console.log(Boolean(x))

//Common Problem - Variable declaration can only happen once in scope.

//Best Practices for naming. Be specific and concise. 
//Mostly use camelCase, snake_case, PascalCase, skewer-case (sometimes nocase and SCREAMING_CASE)

//can assign multiple variables

let brotherName = "Jim"
let sisterName = "Agnes"

sibNames = (sisterName, brotherName)

console.log(sibNames)

//executes 'chronologically'

//SCOPE is the 'jurisdiction' of your variables. Determined by {}

/*Equal and Strict Equal Operators 
    -Comparison Operators (==) check if values are equal
    -Type Coercion will occasionally modify the data type to "help" the code. (2 == "2" but 2 + "2" = 22)  
    - STRICT equality comparison (===) will override Type Coercion*/

    console.log(2 == "2")
    //returns true
    console.log(2 ==="2")
    //returns false

    //"Pretty easy day. Pretty important day." ~ P. Money

//MORNING CHALLENGE 

let fName = "Kyle";
let lName = "Ferguson";
let houseNumber = 46;
let street = "Cross";
let city = "Burlington";
let state = "Vermont";
let zip = "05408"

let myAddress = fName + " " + lName + " " + houseNumber + " " + street + " " + state + " " + zip

console.log(myAddress)

//TEMPLATE LITERALS or STRING INTERPOLATION

let myAddressTempelateLiteral = `My Address Is 
${fName} ${lName} \n${houseNumber} ${street}\n${city} ${state}, ${zip}`

console.log(myAddressTempelateLiteral)

// ? \n -- functions as a line break
