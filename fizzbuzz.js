// * FIZZBUZZ CHALLENGE 
// create and arrow function expression "fizzbuzz"
    //parameter - amount of numbers that a loop within a function will iterate over
    // condition checks
        // *divisible by 3 - print "Fizz"
        // * divisible by 5 - print "Buzz"
        // * divisible by 3 & 5 - FizzBuzz
        // * else print "Actual number is not divisible by 3, 5, nor both"


let fizzbuzz = number => {
    if (number % 3 == 0 && number % 5 == 0) {return (console.log("FizzBuzz"))}
    else if (number % 3 == 0) {console.log("Fizz")}
    else if (number % 5 == 0) {console.log("Buzz")}
    else {console.log("Actual number is divisible by 3 nor 5")};

}

fizzbuzz (13)


// * HOLY SHIT I DID IT