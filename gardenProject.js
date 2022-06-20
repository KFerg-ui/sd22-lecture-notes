//setting up async/await ask functionality for the command line
const { platform } = require("os");
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// create the Line class
class Zone {
  constructor(name, connections) {
    (this.name = name), (this.connections = connections);
  }

  wander() {
    console.log(
      `From the ${this.name} area you can wander to ${this.connections}.`
    );
  }
}

//basic if function using booleans to console log what you're carrying
//sends user to next function depending on input.
//pocketsDrop is a function for conditions where you have something
//and allows you to choose whether or not to leave it behind
function pockets() {
  if (
    inventoryStateMachine.rose === true &&
    inventoryStateMachine.coin === true
  ) {
    console.log("You have a rose and a coin with you.");

    pocketsDrop();
  }
  if (
    inventoryStateMachine.rose === true &&
    inventoryStateMachine.coin === false
  ) {
    console.log("You have a rose in your lapel.");
    pocketsDrop();
  }
  if (
    inventoryStateMachine.rose === false &&
    inventoryStateMachine.coin === true
  ) {
    console.log("You have a coin in your pocket.");
    pocketsDrop();
  }
  if (
    inventoryStateMachine.rose === false &&
    inventoryStateMachine.coin === false
  ) {
    console.log(`You have nothing in your pockets`);
    zoneDesignate();
  }
}

//designating start zone, so we can engage in the zone switch functions
let currentZone = "roses";

//gotta have your classes and the places you can wander listed as key,value pairs
let Gate = new Zone("Gate", "Roses");
let Roses = new Zone("Roses", "Platform, Wildflowers, Orchard");
let Platform = new Zone("Platform", "Rose Garden, Wildflowers");
let Wildflowers = new Zone("Wildflowers", "Roses, Platform, Fountain");
let Fountain = new Zone("Fountain", "Orchard, Wildflowers");
let Orchard = new Zone("Orchard", "Roses, Fountain");

//to assist in the
let zoneLookUp = {
  gate: Gate,
  roses: Roses,
  platform: Platform,
  wildflowers: Wildflowers,
  orchard: Orchard,
  fountain: Fountain,
};

//create state machine to hold allowable transitions
let zoneStateMachine = {
  gate: ["Roses"],
  roses: ["Wildflowers", "Platform", "Orchard"],
  platform: ["Roses", "Wildflowers"],
  wildflowers: ["Platform", "Roses", "Fountain"],
  fountain: ["Wildflowers", "Orchard"],
  orchard: ["Roses", "Fountain"],
};

//this is way too involved. use state machines to determine if functions are available and switching states to determine future options.
//but it works
//...i hope
async function pocketsDrop() {
  input = await ask(
    `if you would like to drop something, type its name in now. If you want to keep everything, type [keep]`
  );
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "rose" && inventoryStateMachine.rose === true) {
    console.log(`alright, you drop the rose`);
    inventoryStateMachine.rose = false;
    zoneDesignate();
  }
  if (action === "coin" && inventoryStateMachine.coin === true) {
    console.log(`alright, you drop the coin`);
    inventoryStateMachine.rose = false;
    zoneDesignate();
  }
  if (action === "keep") {
    console.log(
      "Probably a good call, keeping things. Not like I'm gonna add crap to this game that isn't necessary, good gracious."
    );
    zoneDesignate();
  }
}

//certain points in the game, you need to have some options available depending on inventory
//state machine to inform those options in the game
let inventoryStateMachine = {
  rose: false,
  coin: false,
};

// class Inventory (this is nothing, i'm leaving it in out of superstition. {
//   constructor(item, carry) {
//     (this.item = item), (this.carry = carry);
//   }
//   pockets() {
//     if (this.carry === true) console.log(`you have ${this.item} with you`);
//   }
// }
// let Coin = new Inventory("Coin", false);
// let Rose = new Inventory("Rose", false);

// let coinLookUp = {
//   gate: Coin,
//   rose: Rose,
// };

//
let doorStateMachine = {
  //door lock state, used at the fountain
  latch: true,
};

let roseStateMachine = {
  donate: false,
  //can't donate a rose if you don't have a rose
};

function atTheGate() {
  //to assure smooth entry.
  console.log(
    "Welcome to your garden, back in a quiet corner of a green meadow. It's an hour or so before dusk, but don't worry. There are no mosquitos. Right now you're standing at a birch gate with an arched passage. Just beyond is a small rose garden. To enter the rose garden just type [yes]."
    // or you can [wander]. Or you can [watch sunset] from here.
  );
  begin();
}
async function begin() {
  let input = await ask("Would you like to enter the garden?");
  //I 1000% stole this input sanitizing code from the train workshop. I hope that's ok, I like it.
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "yes") {
    console.log(
      "You have entered the Rose Garden. You can explore by typing [wander] and where you would like to visit. To see where you can go from here, simply type [wander].\nIf at any time you want to see what you carry with you, just enter [pockets]. Enjoy!"
    );
    await roseexplore();
  }
  if (action !== "yes") {
    console.log("That's not a valid command, you can type [yes] to begin.");
    begin();
  }
}

//so every zone has its own dedicated async/await function that provides different options for
//how to behave in the zone. standard are "wander" and "pockets".
async function roseexplore() {
  let input = await ask("What would you like to do among the roses?");
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "wander" && !target) {
    zoneLookUp[currentZone].wander();
    roseexplore();
  }
  if (action === "pockets") {
    pockets();
    // roseexplore();
  }
  if (action === "smell") {
    console.log("You smell the roses, they're delightful.");
    roseexplore();
  }
  if (action === "shears") {
    console.log(
      "you pick up the shears. they have little bits of rose on the blades."
    );
    //goes to embedded async await function "shears" that will allow the user to make further choices.
    shears();
  }
  if (
    //gotta allow for bad inputs. in a better version of this, the game is more sensitive and intuitive.
    //but that's not what is happening here. not yet. maybe later.
    action !== "wander" &&
    action !== "shears" &&
    action !== "relax" &&
    action !== "smell" &&
    action !== "pockets"
  ) {
    console.log("not sure what you mean");
    roseexplore();
  }
  if (action === "wander" && target) {
    if (zoneStateMachine[currentZone].includes(target)) {
      currentZone = target.toLowerCase();
      zoneDesignate();
    } else {
      console.log("You can't wander there from here.");
      roseexplore();
    }
  }
}

async function doorPuzzle() {
  //fxn called upon any entrance to FOUNTAIN zone when doorstate is TRUE (meaning locked)
  //needs "gemini" password to make doorstate FALSE
  let input = await ask(
    "The gate to the fountain is locked...\n You hear a faint whisper... is it coming from the water?\n ...it asks, 'what did you see through the telescope?'"
  );
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);
  {
    if (action === "gemini") {
      //this is the code to open the door (switch door state), had to get it from the telescope.
      doorStateMachine.latch = false;
      console.log("the latch to the fountain zone swings open for you");
      await fountainExplore();
    }
    //moves you into fountain
    if (action !== "gemini" && action !== "pockets") {
      console.log("sorry, that didn't work. try again.");
      await doorPuzzle();
    }
  }
  if (action === "pockets") {
    pockets();
  }
}

async function platformExplore() {
  input = await ask("What now?");
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "wander" && !target) {
    zoneLookUp[currentZone].wander();
    platformExplore();
  }
  if (action === "pockets") {
    pockets();
  }
  //like this one, here
  //first time I got a state machine to work to grant/deny access
  if (action === "telescope" && roseStateMachine.donate === true) {
    console.log(
      "You peer through the telescope. Even in the golden light of dusk you can see far off into the darkness of space. Stars twinkle amid the void. You make out Gemini."
    );
    await platformExplore();
  }
  if (action === "telescope" && roseStateMachine.donate === false) {
    console.log(
      "The telescope is obscured somehow. It cannot be viewed without a donation."
    );
    await platformExplore();
  }
  if (action === "donate" && inventoryStateMachine.rose === true) {
    inventoryStateMachine.rose = false;
    roseStateMachine.donate = true;
    console.log("You donate the rose to the platform");
    await platformExplore();
  }
  if (action === "donate" && inventoryStateMachine.rose === false) {
    console.log("you don't have a rose to donate to the platform");
    await platformExplore();
  }
  if (action === "take") {
    inventoryStateMachine.coin = true;
    console.log("you place the coin in your pocket");
    await platformExplore();
  }
  if (action === "wander" && target) {
    if (zoneStateMachine[currentZone].includes(target)) {
      currentZone = target.toLowerCase();
      zoneDesignate();
    } else {
      console.log("You can't wander there from here.");
      await platformExplore();
    }
  }
  if (
    action !== "take" &&
    action !== "wander" &&
    action !== "pockets" &&
    action !== "telescope" &&
    action !== "donate"
  ) {
    console.log(
      `not sure what you mean. what do you want to do in the ${currentZone}`
    );
    await platformExplore();
  }
}

async function wildflowersExplore() {
  let input = await ask("What now?");
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "wander" && !target) {
    zoneLookUp[currentZone].wander();
    wildflowersExplore();
  }

  if (action === "wander" && target) {
    if (zoneStateMachine[currentZone].includes(target)) {
      currentZone = target.toLowerCase();
      zoneDesignate();
    } else {
      console.log("You can't wander there from here.");
      wildflowersExplore();
    }
  }
  if (action === "sing") {
    console.log(
      "That was it! That was the magic key! Sing among the wildflowers! You have just defeated the garden. Yes, this relationship with the garden was adversarial and you have defeated it by singing. It's amazing. Good job. The garden is sad now, but simply because you have conquered it with violence and song. Well done."
    );
    //What a cute easter egg. I'm so cute. How cute.
    process.exit();
  }
  if (action === "snail") {
    //commenting out this code because this code rules and you have to engage it.
    console.log("You sure you want to approach this snail? Ok...");
    setTimeout(function () {
      snail();
    }, 1800);
    //I SET A TIMEOUT HERE, EXCLUSIVELY FOR COMEDIC EFFECT
    //BECAUSE IT DIDN'T FLOW CORRECTLY WITHOUT A PAUSE
    //I LEARNED HOW TO DO THIS PAUSE JUST TO MESS WITH YOU
    //IN YOUR FACE, MACHINE
  }
  if (action === "pockets") {
    pockets();
  }
  if (
    action !== "sing" &&
    action !== "wander" &&
    action !== "pockets" &&
    action !== "snail"
  ) {
    console.log(
      `not sure what you mean. what do you want to do in the ${currentZone}`
    );
    await wildflowersExplore();
  }
}

async function snail() {
  //this snail rules.
  input = await ask(
    "the snail tilts its head. is it trying to [speak]? what would you like to do?"
  );
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "speak") {
    await snailSpeak();
  }
  if (action === "take") {
    console.log(
      "You can't take the snail, it's stuck with snail goo. Also that's mean, wtf."
    );
    await snail();
  }
  if (action === "leave") {
    console.log("wise decision");
    await wildflowersExplore();
  }
  if (action !== "leave" && action !== "take" && action !== "speak") {
    console.log(`get it together, dude. it's a snail.`);
    await snail();
  }
}
async function snailSpeak() {
  input = await ask(
    "the snail doesn't say anything to you, because it's a snail, but its eyes are hypnotic. in your mind's ear you hear a thousand whispers echoing... 'do you choose fire or wind?'"
  );
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "fire") {
    console.log("Then the fire chooses you.");
    // set timeout modified from code found at:https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/
    setTimeout(function () {
      console.log("loser");
      process.exit();
    }, 2300);
    //BAM TIMEOUT YOU LOSE I AM A GOLDEN GOD OF CODING
  }
  if (action === "wind") {
    console.log("You chose wind? Now you gotta start over.");
    setTimeout(function () {
      console.log("who's talking to themselves now?");
      process.exit();
    }, 2100);
    //AGAIN. I CAN'T BE CONTAINED.
  }
  if (action === "neither") {
    console.log(
      "smart move... the only way to win is to not play with the snail"
    );
    wildflowersExplore();
  }
  if (action !== "wind" && action !== "fire" && action !== "neither") {
    console.log(
      `it's called 'seltzer', Dave. That's why people call it Seltzer. JEeeEEze.`
    );
    //IT'S CALLED A SELTZER
    process.exit();
    //kicked out for seltzer violations, start over
  }
}

async function orchardExplore() {
  input = await ask("What now?");
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "wander" && !target) {
    zoneLookUp[currentZone].wander();
    orchardExplore();
  }

  if (action === "wander" && target) {
    if (zoneStateMachine[currentZone].includes(target)) {
      currentZone = target.toLowerCase();
      zoneDesignate();
    } else {
      console.log("You can't wander there from here.");
      orchardExplore();
    }
  }
  if (action === "take") {
    console.log(
      "Jesus, you people always trying to profit off something. GD Capitalists. Get out of the garden."
    );
    process.exit();
  }
  if (action !== "take" && action !== "wander") {
    console.log(
      `not sure what you mean. what do you want to do in the ${currentZone}`
    );
    await orchardExplore();
  }
  if (action === "pockets") {
    await pockets();
  }
}
async function fountainExplore() {
  //I'm trying not to over-comment. It's mostly just repeating the same as above for a while, here.
  //async/await with multiple input options and state machines to contain available moves.
  //jiu-jitsu
  input = await ask(
    "The fountain gurgles and pours in dulcet tones. Beneath the shimmering water you see many coins, thrown by others. What would you like to do?"
  );
  //If I were to go over this thing and really refine it
  //I would sort out a state machine for the first visit to every location
  //so you didn't get the intro text every time
  //I fixed it elsewhere but the locked fountain messes it up.
  //might do later? right now i'm just astonished it works at all.
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "wander" && !target) {
    zoneLookUp[currentZone].wander();
    fountainExplore();
  }
  //look i'll be honest, there are spots in here where the gameplay isn't exactly intuitive.
  //like i get that you're coming here into the code to figure out what to do at places
  //because how are you going to know that "toss" is the command?
  //point is sorry, just type 'toss'
  if (action === "toss" && inventoryStateMachine.coin === true) {
    console.log(
      "You throw a coin into the water. The surface breaks and swallows your offering, polishing its dull surface as it sinks below. The sound of its splash melts into the myriad sounds of the fountain, first its own sound and then a part of the collective. You find it peaceful. You notice the sun is beginning to fade beyond distant trees in brilliant magenta and orange. You have come far enough, friend. If you would like, you can now relax and stay in this place. If you do so, your journey will end. Or you may continue along"
    );
    fountainStateMachine = true;
    await fountainDecision();
  }
  if (action === "toss" && inventoryStateMachine.coin === false) {
    console.log("You have nothing to throw in the fountain.");
    await fountainExplore();
  }
  if (action === "wander" && target) {
    if (zoneStateMachine[currentZone].includes(target)) {
      currentZone = target.toLowerCase();
      zoneDesignate();
    }
  }
  if (action === "wander" && !target) {
    if (zoneStateMachine[currentZone].includes(target)) {
      console.log("You can't wander there from here.");
      fountainExplore();
    }
  }
  if (action === "pockets") {
    await pockets();
  }
  if (action !== "toss" && action !== "wander" && action !== "pockets") {
    console.log(
      `not sure what you mean. what do you want to do in the ${currentZone}`
    );
    await wildflowersExplore();
  }
}
async function fountainDecision() {
  let input = await ask(
    "Which do you choose? Continue or relax and end the game?"
  );
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);
  if (action === "continue") {
    console.log("Very well, continue on your way.");
    fountainExplore();
  }
  if (action === "relax") {
    console.log(
      "you sit down by the fountain, amid the sound and the light, and breathe deeply from the cool air. It is good here. Thank you for playing."
    );
    process.exit();
  }
}
function zoneDesignate() {
  if (currentZone === "platform") {
    console.log(
      "You climb up a cargo net made of yak tears to a platform high in the trees. The views are spectacular in every direction. You can almost see Canada.\nOn the platform you see a golden telescope with a brown cigar box nearby that says 'donate' on it.\nTucked beneath the corner of a woven jute rug you see the dull gold edge of a coin."
    );
    platformExplore();
  }
  if (currentZone === "roses") {
    console.log(
      "You walk among the roses. On the ground someone has left behind a red-gripped pair of gardening shears."
    );
    roseexplore();
  }
  if (currentZone === "wildflowers") {
    console.log(
      "You are now among the wildflowers, just where Tom Petty said you belonged.\nYou can hear the soft music of the water fountain nearby.\nA snail glares at you."
    );
    wildflowersExplore();
  }
  if (currentZone === "orchard") {
    console.log(
      "The apple orchard is majestic, if a little smelly. No one has harvested this delicious bounty in some time.\nApples everywhere..."
    );
    orchardExplore();
  }
  if (currentZone === "fountain" && doorStateMachine.latch === true) {
    doorPuzzle();
  }
  if (currentZone === "fountain" && doorStateMachine.latch === false) {
    fountainExplore();
  }
}

async function shears() {
  //admittedly this piece of code is not placed well
  //it should be closer to the thing its called by
  //but i was worried if i moved it the code would break
  //true story
  let input = await ask("What do you want to do with the shears?");
  input = input.split(" ");
  let action = input[0];
  let target = input.slice(1).join(" ");
  target = target.charAt(0).toUpperCase() + target.slice(1);

  if (action === "cut" && inventoryStateMachine.rose === true) {
    console.log(
      "you already have a rose, you don't need another. maybe [drop] the shears."
    );
    await shears();
  }
  if (action === "cut" && inventoryStateMachine.rose === false) {
    console.log("you cut the rose and put it in your lapel");
    inventoryStateMachine.rose = true;
    await roseexplore();
  }
  if (action === "take") {
    console.log(
      "These shears are too sharp to carry with you. You should probably [drop] them."
    );
    await shears();
  }
  if (action === "wander") {
    console.log(
      "You can't wander with the shears. You should probably [drop] them."
    );
    await shears();
  }
  if (action === "drop") {
    console.log("You drop the shears in the grass.");
    await roseexplore();
  }
  if (
    action !== "drop" &&
    action !== "wander" &&
    action !== "take" &&
    action !== "cut"
  ) {
    console.log(
      "quit playing around, you've got something sharp in your hands. go ahead and [drop] the shears to carry on."
    );
    await shears();
  }
}

// function checkRose() {
//   if ((inventoryStateMachine.rose = true)) console.log("saved");
// }
// async function exploring() {
//   //assign result of await ask to a variable for use
//   let input = await ask("where else would you like to explore?");
//   input = input.split(" ");
//   let action = input[0];
//   let target = input.slice(1).join(" ");
//   target = target.charAt(0).toUpperCase() + target.slice(1);

//   //if action is "map" and there is no target
//   if (action === "map" && !target) {
//     zoneLookUp[currentZone].map();
//     exploring();
//   }
//   //look up the current line in the lookup table and call the map method on it

//   //if action is "relax" and there is no target
//   if (action === "relax" && !target) {
//     console.log("you've settled into your seat and wait for your destination.");
//     process.exit();
//   }
//   //console log the exit message
//   //exit the program

//   //if action is "transfer" and there is a target
//   if (action === "transfer" && target) {
//     if (lineStateMachine[currentLine].includes(target)) {
//       currentLine = target.toLowerCase();
//       console.log(`You transferred to the ${target} line`);
//       riding();
//     } else {
//       console.log("You can't transfer there from here.");
//       riding();
//     }
//   }
//   if (action !== "map" && action !== "transfer" && action !== "relax") {
//     console.log("What are you trying to do?");
//     riding();
//   }

//   //if  the value of currentLine in the state machine includes the action target

//   //set the current line to the target

//   //inform the user of the change in current line

//   //call our riding function to continue getting input

//   //if the value of currentLine in the state machine does NOT include the action target

//   //inform user that they can't transfer lines

//   //call our riding function to continue getting input
// }

// //if the input does not match any of the available options

// //let the user know their input is incorrect

// //call the input loop

// //call the input loop recursively so it always prompts the user to continue

//call the intro function
atTheGate();
