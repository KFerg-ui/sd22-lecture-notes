function getData(callback) {
    setTimeout(() => {
        callback("some data")
    }, 3000);
}

// getData(function (data) { console.log(data) })

console.log("hello world")

// *PROMISES

/* 
    * Promise is an object that may produce a singular value in the future.

    * Three States
        * Pending (unfinished)
        * Fulfilled (complete value result)
        * Rejected (error)
*/

function getData() {
//create a new instance of a promise
    return new Promise((resolve, reject) => {
        let flag = true 
        setTimeout(() => {
            if (flag) {
                resolve("some true data")
            } else {
                reject("rejected")
            }
        }, 3000)
    })
}

getData()
    .then(data => console.log(data))
    .catch(function(error) {console.log(error)})

/* 
* GONNA HAVE TO DIG IN ON THOSE .catch AND .then COMMANDS, DUDE

* LINE BY LINE OK
    * Promise takes resolve/reject as its callback
    * wrapped in selfTimeout to simulate waiting for it to complete
    * resolve() or reject() the promise
    * When returned, the getData() fx will return a Promise instead of a given string
    * We use .then() and .catch() resolvers w callbacks which catch the Promise and extrapolate the information we want
    */


// * ASYNCHRONOUS CODING
/* here we go
    * async keyword
*/ 

// * Three Ways to declare
async function asyncFxDeclaration() { }

let asyncFxExpression = async function() { }

let asyncArrowFx = async () => { }

// *Always return a Promise. The Promise must be resolved to get the data. 

async function getName() {
    return "Kyle"
}

getName().then(data => console.log(data))

// * Async Await
    /* async functions are WAITING for something,
    */

    async function extraData() {
        let infoFromGetData = await getData()
        // !await waits for the data from getData before allowing further execution
        console.log(`${infoFromGetData} + data from async function`)
    }

    extraData().then(data => console.log(data))
        //! HERE - .then means "if the Promise resolves THEN send the data to a console.log function"
