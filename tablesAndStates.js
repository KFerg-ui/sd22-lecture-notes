//* LOOKUP TABLE
// object that "maps" strings to other values
// e.g. abbreviations to full words ("January": ["Jan", 01, 1, "I"])

//"benefit is it efficiently processes user input"

function getPoemTitle(authorUserSelect) {
  let poemTitleByAuthor = {
    "Bill Stratton": [
      "Beneath The Water Was Stone",
      "Reminiscing About Camp Again",
    ],
    "Duncan Campbell": "Soggy Things; A Complete List",
  };
  return poemTitleByAuthor[authorUserSelect];
}

console.log(getPoemTitle("Bill Stratton"));

function getSong(songUserSelect) {
  let songTitleByMusician = {
    "No Surprises": "Radiohead",
    "Zero Dark Thirty": "Aesop Rock",
    "Ipecac Neat": "POS",
  };
  return songTitleByMusician[songUserSelect];
}
console.log(getSong("No Surprises"));

//* STATE MACHINES

// objects with various states
// e.g. traffic lights

let lightState = {
  red: ["green", "yield warning"],
  yellow: ["red"],
  green: ["yellow"],
  yield: ["red"],
};

let currentState = "green";

function enterState(newState) {
  //enter function takes new
  let validTransitions = lightState[currentState];
  //referencing the current state of "green" with the KEY lightState
  if (validTransitions.includes(newState)) {
    //so if the newState is included in the valid options for a transition
    //we can proceed
    currentState = newState;
    //CHANGING current to new
    //* THIS IS BIG AND YOU FORGET IT
    //* EQUALS AFTER the conditions are met
    //* IMPLEMENTS CHANGES
    console.log(currentState);
    //check out my melody
  } else {
    //gotta have an error catch
    throw `invalid state transition from ${currentState} to ${newState}`;
  }
}
enterState("red");

//
//
//* STATE means ANY DATA
//"state machine" means a bunch of shit
//wikipedia finite state machine if you
//want a history lesson

//

//*Transitioning b/t objects
//sometimes you have to get back and forth between
//various objects for data
//
