// NULL = "intentional absence"

/*Conditionals

    Way to check if an expression is true.
        Also falseness.
        Can execute code when the condition is met, but also when it's not met. 
        Can even execute code that checks for another condition altogether.
~~~Fundamental function of a Conditional is to check for truthiness.~~~
    */

        let light = "on"

        if (light === "on") {console.log("the light's on")}

/* Falsey values
    ~false
    ~0
    ~null
    ~undefined
    ~NaN
    ~"" (any empty string) 
    */

let temperature = 72
if (temperature > 70) {
    console.log("too hotttttt")
}

//the simple "If" conditional is a truth check
//when "else" is added it handles false as well

    //else {console.log("cold")}

//"else" ONLY handles true/false, you could put "pants" as the temp and get "cold" bc it's false

//"else if" handles additional conditions

else if (temperature > 40){console.log("spring")}
else if (temperature > 0) {console.log("frriggg")}
else if (temperature <= 0) {console.log("why do we live here")}

/*Conditionals run top-down. 
If the temperature returns "true" to multiple conditions it will complete the 
first one it encounters and not complete any other "else" conditions. */


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/* LOGICAL OPERATORS

And (&&) - true if all values true
Or (||) - true if any of the values are true
Not (!) - FLIPS the resulting operation

*/

console.log(5<10&&7<10)
//returns true bc 5 & 7 are both less than 10

console.log(5<1&&7<10)
//returns false bc one of the values (5<1) is not true

//TRUE REQUIRES ALL TRUE

console.log(5<1||7<10)
//returns true bc one is true 
    //if both are true it's still true ("or" condition is really "any of these?")

console.log(!(5<10))
//returns false because the statement is true, then flipped

//USING LOGICAL OPERATORS

let weather = " "
let temp = 72

if (temp >=70 && weather === "sunny") {console.log("we'll day drink")} else if (temperature <70 || weather === "rain")
{console.log("we will night drink")} else {console.log("probably already drunk")}


//CHALLENGE

    /* 
    Set a variable of age and give it a number of your choice.
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log "sorry, you're too young to do anything."
    If the age is at least 18, "You can vote!"
    If the age is at least 21, "You can drink!"
    If the age is at least 25, "You can rent a car!"
*/

if (false) {
    console.log("🍕");
  } else {
    console.log("🍔");
  }

  if (false) {
    console.log("🍕");
  }
  
  console.log("🍔");

let age = 22
if (age >= 25) {console.log("drive")}
else if (age >= 21) {console.log("drink")}
else if (age >=18) {console.log("vote")}
else if (age <18) {console.log("ain't shit")}

//TERNARYS

let fName = "Pal"

if (fName === "Paul") {
    console.log("Instructor")
} else {console.log("student...")}

//Conditionals into Ternary - different form of conditional 
        //(?) is like "what do we do if this is true?"
                //(:) is like "next option for possible true"

fName === "Paul" ? console.log("instructor") : console.log("student")

let hero = "batman"
let villain = "riddler"

hero === "batman" && villain == "riddler" 
    ? console.log("what has a head and a tail and no body?")
    : hero == "batman" && villain == "kiteman" 
    ? console.log("he comes at kite")
    : hero == "batman" && villain == "joker"
    ? console.log("why so serious?")
    : console.log("stop")

//"I like to keep Ternary's simple." P. Money

/* END OF DAY QUIZ
        ~ What's the default returned value of a function? (Undefined)
        ~ What are Ternary's primarily used for? (if:else statements -> conditionals)
        ~ How do we check if a value is falsy?
        ~ */

let teacher = 0;
if (!teacher) {console.log("shit's false")}

// if() statements ALWAYS check if true. so we HAVE to flip it with (!) if we're trying to figure out if it's false.

        //Can I give and arrow function more than one parameter? (parenthetical separated by commas)

let turnLightBasedOnTemp = temp => { temp > 65 ? light = true : light = false }

console.log(turnLightBasedOnTemp(60))

//Function declarations are backwards compatible, Expressions are not (??)