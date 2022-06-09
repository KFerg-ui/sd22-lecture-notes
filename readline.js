const { rawListeners } = require("process")
const interface = require("node:readline/promises");

const rl = interface.createInterface(
    process.stdin,
    process.stdout
)

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve)
    })
}

async function main() {
    console.log('Running the code ...');

    const answer = await rl.question("What do you think of the class?");
    console.log('You replied:');
    console.log(answer.toUpperCase());
    console.log('Thank you for the feedback!');
}

main();