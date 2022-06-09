/* Standard I/O is hardware, like keyboard and mouse 

Memory and Output

I/O and CALLBACKS
    *Process is an event that runs in the foreground of background on your local machine

    *Node.js allows access to its processes (via a process object)
    
    *Helps us deal w processing external input and internal output (IO) into and out of our file/program. 
        *This FILE becomes a PROCESS when it's EXECUTED.

    * Done using process.stdin and process.stdout PROPERTIES
        * e.g. console.log: console is a property/log is a METHOD ('methods are essentially functions' ~P)

*/

//import { stdin, stdout } from "node:process"

//process.stdin.once("data", (input)=> { 
    //console.log(input.toString())
//})
    //* CALLBACK is a function within a function. It does not have to be invoked, it just RUNS. 

//process.stdin.once("data", function(input) {
  //  console.log(input.toString())
//})

/* * Event Listeners 
    * .once() method is example
    * way of handling input from user
    * two parameters (event and action)
        * event is when action will fire
        * action is a callback function that does something when the event occurs
        * 
    *CALLBACKS are functions that will be called upon inside of another function or method (when event occurs)
*/
    
function getName(name) { 
    return name
}

function getPorsche(winnerName) {
    let winner = getName(winnerName)
    console.log(`Congrats, ${winner}!`)
}

//getPorsche("Trevor")
// * in the second function above getName is a CALLBACK because it's an existing function in a function

/*      
    *EVENT LISTENERS
        *Listen on standard input (stdin) so when we type something, node will reply with
        *what we say plus "butts"
*/

function handleInput(input) {
    console.log(input.toString().trim() + " ...butts")
    process.stdin.once("data", thanksForPlaying)
}

function thanksForPlaying(input) {
    console.log(input.toString().trim() + "... Thanks for playing")
    console.log("All done.")
    process.exit()
}
//import { stdin, stdout } from "node:process"

//process.stdin.once("data", handleInput)

// * .once ALWAYS gives something back, it's a function that returns something
        //* this is the nature of methods, as they are functions
        //* above process is a .once function based on standard input (in this case text from the terminal)
        
        //* the .once method operates on the information in the paren... here it is "string data" being fed into a previously defined function

/* 
                *HOUSE METAPHOR IS COOL AND HELPFUL
* process is like walking up to the house (node file "io.js" here)
* stdin is like the front door (standard way in)
* event listener is like the doorbell (.once rings one time)
* so "data" knocks on the door
* handleInput is the ACTION (callback) that responds to "data"... like opening a door

* In order to answer the door you need to build a home (process), with a front door (stdin)
    * then install the doorbell (.once)
    * then define how you'll behave when "data" knocks (handleInput)

* 'process.exit' method ends the process "gracefully" when action is complete
*/

process.stdin.on("data", (input) => {
    //writeable stream ("o" part of IO)
    process.stdout.write(`this is the input: ${input.toString()}`)
})

process.stdin.on("end", () => {
    process.stdout.write("fires for graceful end....\n" )
})


function handleInput(input) {
    process.stdout.write(`The data: ${input}`)
}

process.stdin.on("data", handleInput)
process.stdin.on("end", handleInput)
process.stdin.on("connect", handleInput)