const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// Don't change anything above this line!!!

// This array is only a reference to enemies. You do not need to utilize it. Feel free to use your own enemy names.
let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

async function respond() {
  console.log(`I know this part isn't necessary but it's cool to make you think this rock is thinking stuff.`);

  const answer = await readline.question("who goes there??");
  {if (answer = "darth vader") { console.log("kindly go fuck yourself, D") }
  else if (answer = enemyList) { "lame, go away" }
  else { console.log("come on in!") };

  console.log(`so you said your name is...`);
  console.log(answer.toUpperCase());

}}

respond();

