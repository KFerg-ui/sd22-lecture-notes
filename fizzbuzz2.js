// * MAKING FIZZBUZZ A LOOP
    // you thought you were so smart

    

let fizzbuzz = number => {
    for (i = 0; i <= number; i++){
        if (i % 15 == 0) {
            console.log("fizzbuzz")}
        else if (i % 3 ==0) {
            console.log("fizz")}
        else if (i % 5 ==0) {
            console.log("buzz")
        }
        else {console.log(`${i} is neither`)
        }
    }}

    //fizzbuzz(100)

//    process.stdin.on("data", (input) => {
//            process.stdout.write(typeof parseInt(input))
//    })
    process.stdin.on("connect", () => {
        console.log("pick a number")
    })
    process.stdin.on("data", fizzbuzz)

    //* THIS METHOD IS EFFICIENT BECAUSE WE DEFINE THE FUNCTION (it can be CALLED BACK again) and 
    //* THEN we are REFERENCING IT in the process.stdin.on line