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
  console.log('Fake thinking part....');

const answer = await ask("Who goes there?");
  //Nick and Doug and Robyn really helped get through this part, as I originally had 'await rl.question("Who goes there?"); which was whacking out the function' -Kyle
  let saniVar = answer.toLowerCase().trim()
    
      if (saniVar == "darth vader") { console.log(`Hello, Darth Vader! Kindly go fuck yourself!`) }
    else if (enemyList.includes(saniVar)) { console.log("lame, go away") } 
      //the '.includes' command came from Nick/Doug combo pack - Kyle
    else { console.log(`Hello, ${saniVar.toUpperCase()} come on in!`) };
  
}

respond();
