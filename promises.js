/* 
    *PROMISES
        * Not quarantees. Allow for asynchronous processes. 
        * Object that may produce a singular value in the future. 
            * Can be Pending, Fulfilled, Rejected
    
    * RESOLVERS are linked to promises
        * .then
    */

    function handleInput(input) {
        process.stdout.write(`The data: ${input}`)
    }
    
    process.stdin.on("data", handleInput)
    process.stdin.on("end", handleInput)
    process.stdin.on("connect", handleInput)