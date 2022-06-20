class Location {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }
}

let home = new Location("Cross", "House");
let sidewalk = new Location("NorthAve", "Concrete");
let store = new Location("Ace", "Hardware");

let locationCurrent = "home";

let locationLookUp = {
  Cross: "House",
  NorthAve: "Concrete",
  Ace: "Hardware",
};

let locationStates = {
  home: ["sidewalk"],
  sidewalk: ["home", "store"],
  store: ["sidewalk"],
};
console.log("You are at your house");

function moveLocation(newLocation) {
  if (locationStates[locationCurrent].includes(newLocation)) {
    locationCurrent = newLocation;
    console.log(
      locationCurrent[(locationLookUp[this.name], [this.description])]
    );
  } else {
    console.log("you can't go there from here. at least not directly.");
  }
}

moveLocation("sidewalk");
console.log(locationCurrent);
