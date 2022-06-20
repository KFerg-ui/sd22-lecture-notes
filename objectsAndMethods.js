//*OBJECTS
//way of representing things in the world
//container for values in json
//(javascript object notation)
//properties & methods
//.property
//.method()
// has .this keyword

let abby = {
  species: "dog",
  //species is property, dog is value...
  color: "brown",
  spayed: true,
  breed: "mutt",
  weight: 40,
  favoriteActivity: "chasing squirrels",
};

//* Keys are strings
//above species, etc.. are keys (types of properties)

console.log(abby);
//shows entire object w all key:values
console.log(abby.species);
//displays property value
console.table(abby);
//displays obect in a table format
console.log(abby["color"]);
//access object using keys

let returnKeys = Object.keys(abby);
console.log(returnKeys);
//Object.keys(object name)... returns only keys as an array

let returnValues = Object.values(abby);
console.log(returnValues);
//Object.values(object name)... returns values in an array

//* Property & Value Creation

//CHALLENGE: Create an object mcmChair w property "frame"; "cushion"; "frameFinish"; "upholstery"

let mcmChair = {
  frame: "",
  //using "" will hold place
  //makes object assume a string is coming
  frameFinish: undefined,
  cushion: undefined,
  upholstery: "leather",
  //using undefined as placeholder
  //can also use null
};

console.log(mcmChair);
console.table(mcmChair);

//* ADDING VALUES to Object
//dot operator (.)
mcmChair.frame = "stainless chrome";
//[] notation
mcmChair["frameFinish"] = "chrome";
mcmChair.cushion = ("soft", 47);
console.log(Object.values(mcmChair));
console.log(mcmChair.frame);

//* ADDING KEYS
mcmChair.likeability = "pretty neat";
mcmChair["likeability2"] = undefined;
//Property creation REQUIRES value ("pretty neat", undefined here)
console.table(mcmChair);

let NetFlix = {
  id: 9,
  likes: 932,
  name: "the good place",
  seasonInfo: {
    season1: {
      numberOfEps: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Flying" },
        { episode: 3, episodeName: "Dance Dance Resolution" },
        { episode: 4, episodeName: "Fuckin' Demons, bruh" },
      ],
    },
    season2: {
      numberOfEps: 6,
      episodeInfo: [
        { episode: 1, episodeName: "good stuff" },
        { episode: 2, episodeName: "bad stuff" },
        { episode: 3, episodeName: "medium stuff" },
      ],
    },
  },
};

//*CHALLENGE get the name of season 1 episode 2
console.log(NetFlix.seasonInfo.season1.episodeInfo[1].episodeName);
//can do it this way
//dot notation through the OBJECTS
//using the index [1] here because episodeInfo = ARRAY
//then back to dot notation to get episodeNAme

//CHALLENGE
//assign a property called total seasons with a value for total seasons
//add a season 3 that looks like seasons 1 & 2
// assign episodeInfo property to season 3 with an array w 2 eps

NetFlix.seasonInfo.totalSeasons = 3;
NetFlix.seasonInfo.season3 = {
  numberOfEps: 2,
  episodeInfo: [
    { episode: 1, episodeName: "this" },
    { episode: 2, episodeName: "that" },
  ],
};
// NetFlix.seasonInfo.season3.numberOfEps = 2;
// NetFlix.seasonInfo.season3.episodeInfo = [
//   { episode: 1, episodeName: "this?"} , {episode: 2, episodeName: "that?" },
// ];
console.log(NetFlix.seasonInfo.season3.episodeInfo[1].episodeName);
console.log(NetFlix.seasonInfo.season3);

console.log(mcmChair);
//delete mcmChair.likeability2; deletes key
//* Dangerous, future access compromised
//error prone
//easier to just take property (likeability2) and reassign it to null
mcmChair.likeability2 = null;
console.table(mcmChair);

//*CREATING METHODS
/*
Method is a function attached to an object as a property 
 - shift, pop, filter, whatever... 
*/

let dog = {
  name: "Jimothy",
  color: "fawn",
  age: "8",

  speak: function () {
    console.log("Bark!");
  },
  sit() {
    console.log("SITTING");
  },

  getName() {
    console.log(`Hello, my name is ${this.name}`);
  },
  getBreed(breed) {
    console.log(`Hello, my name is ${this.name} and I'm a ${breed}`);
  },
  beQuiet: () => {
    console.log(`${this.age} you're too old not to listen...`);
  },
};

dog.speak();
//called here as a FUNCTION - will return "Bark!"
//called below as a property - will return nothing
dog.speak;

dog.sit();
dog.getName();
dog.getBreed("pitbull");
dog.beQuiet();

//* THE MAGIS WORD IS "THIS"
//means "this object I'm in right now"
//SEE ABOVE under getName function definition
//NEEDS this.name to tell it to get the name inside the object
