//*CLASSES DEFINITION

/*
Blueprints or templates for creating objects
Encapsulate data with code 

Considered special functions and can be defined as 
    - Class Declaration
    - Class Expression
*/

//* SYNTAX

//STANDARD OBJECT
let paul = {
  name: "Paul",
  subject: "SD",
  isTenured: true,
  isPolyGlot: true,
};

//CLASS
//*CLASS DECLARATION
class Teacher {
  //class method for creation and
  //initialization of class object
  constructor(name, subject, tenure, isPolyGlot) {
    this.name = name;
    this.subject = subject;
    this.tenure = tenure;
    this.isPolyGlot = isPolyGlot;
  }
  // Class Body
}

//* KEYWORDS - this, new, constructor, class

let Ferguson = new Teacher("Kyle", "nope", 2022, false);
console.log(Ferguson);
//returns Object "Ferguson"
// just created an object according to class definition

console.log(Ferguson.tenure);
//returns "2022"

Ferguson.style = "Second Circle";
console.log(Ferguson);
//added style: 'Second Circle' to object Ferguson

console.log(Ferguson.style);

//*WHEN AND WHY TO USE
//making objects can suck, individually
//class just makes them faster and easier... that's the whole point

//*Class Expression
//"Don't think I've ever seen someon use this
//but it exists"

let House = class {
  constructor(address, bedrooms, bathrooms, foof) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.foof = foof;
  }
};

let $46Cross = new House("46 Cross Parkway", 3, 2, true);

console.log($46Cross);

//*CLASS METHODS
/*
Method is a function that lives
inside of a class. Can be reused on any 
class instance.
*/

class Car {
  constructor(make, model, year, transmission) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
  }

  greetCar() {
    return `Welcome to your ${this.year} ${this.make} ${this.model}`;
  }
  greetDriver(driver) {
    console.log(`Hello ${driver}, your ${this.make} is looking sick`);
  }
  //MUST TELL IT 'DRIVER' in function definition
  //bc it is NOT part of object....
  modifyMake(make) {
    this.make = make;
  }
}

let maserati = new Car("Maserati", "GranTurismo", 2015, "auto");
maserati.modifyMake("Mazda");
console.log(maserati.greetDriver("Kyle"));

//

//*CHALLENGE
//create class Avengers
// name, superpower, age, isDead, keyMovie
//instance of object w superhero name and properties
// METHOD that console logs and keymovie together

class Avengers {
  constructor(name, superpower, age, isDead, keyMovie) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.isDead = isDead;
    this.keyMovie = keyMovie;
  }
  whatMovie() {
    return `${this.name}, ${this.keyMovie}`;
  }
  whichTeam() {
    let teamCap = ["DarkHawk"];
    let teamStark = ["ShadowHawk"];

    if (teamCap.includes(this.name)) return "Team Cap!";
    //* USING .this BECAUSE WE ARE ONLY CALLING FUNCTION
    //* ON NAME APPLIED WITHIN THE FUNCTION

    if (teamStark.includes(this.name)) return "Team Stark!";
    else return "objection, this hero wasn't in those movies.";
  }
}

let darkHawk = new Avengers(
  "ShadowHawk",
  "Magic Helmet and Claws? It's ambiguous.",
  24,
  true,
  "Almost Infinity War(rumored)"
);

let wolverine = new Avengers(
  "Logan",
  "Healing, Adamantium Skeleton, Rage",
  "Uknown",
  "Many Times, never sticks",
  "LOGAN"
);
console.log(wolverine);
console.log(wolverine.whatMovie());
console.log(wolverine.whichTeam());

//*SPICY
//create method that takes name of superhero and checks it
//against two arrays: teamCap, teamStark

//*CHALLENGE 2
//CIRCLE CLASS

class Circle {
  constructor(radius, isPerfect) {
    //CAN VALIDATE INPUT W IF/ELSE STATEMENT
    if (typeof radius === "number") {
      this.radius = radius;
    } else {
      throw "your parameter needs to be a number";
    }
    // throw is an exception
    // specifies something has failed to happen

    this.isPerfect = isPerfect;
  }
  calcCirc() {
    return (this.radius * 2 * Math.PI).toFixed(2);
  }
  calcArea() {
    return (this.radius ** 2 * Math.PI).toFixed(2);
  }
}

let enso = new Circle(2, false);

console.log(enso);
console.log(enso.calcArea());
console.log(enso.calcCirc());

//*CHALLENGE - No Pineapple Allowed
class Pizza {
  constructor(toppings, sauce, crust) {
    if (toppings === "pineapple") {
      throw "I'm sorry, Dave. My programming does not allow you to do that.";
    }
    (this.toppings = toppings), (this.sauce = sauce), (this.crust = crust);
  }
}
// let badPizza = new Pizza("pineapple", "red", "thin");
// let goodPizza = new Pizza(
//   "gelato(try and fucking stop me)",
//   "none",
//   "'authentic' lol"
// );

// console.log(badPizza);
// console.log(goodPizza);

//*Instantiating Classes in Functions

function circleFromDiameter(diameter) {
  return new Circle(diameter / 2);
}
//Makes a new circle based on the class parameters

console.log(circleFromDiameter(5, true));

//* STATIC FACTORY METHODS
//only work at CLASS level NOT INSTANCES
class CircleStaticFactoryFx {
  static circleFromDiameter(diameter) {
    return new CircleStaticFactoryFx(diameter / 2);
  }
  //SAME as the function from above, except must work inside CLASS
  //so no NEW
  constructor(radius, isPerfect) {
    //CAN VALIDATE INPUT W IF/ELSE STATEMENT
    if (typeof radius === "number") {
      this.radius = radius;
    } else {
      throw "your parameter needs to be a number";
    }
    // throw is an exception
    // specifies something has failed to happen

    this.isPerfect = isPerfect;
  }
  calcCirc() {
    return (this.radius * 2 * Math.PI).toFixed(2);
  }
  calcArea() {
    return (this.radius ** 2 * Math.PI).toFixed(2);
  }
}

let benso = circleFromDiameter(40);
//* SINCE NEW IS ALREADY STATED INSIDE THE STATIC METHOD
//at class level
//don't put new in these method calls here
//new here is going to mess shit up

console.log(benso.radius);

//* INHERITANCE
//Extends

// class Car {
//   constructor(make, model, year, transmission) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.transmission = transmission;
//   }

//   greetCar() {
//     return `Welcome to your ${this.year} ${this.make} ${this.model}`;
//   }
//   greetDriver(driver) {
//     console.log(`Hello ${driver}, your ${this.make} is looking sick`);
//   }
//   //MUST TELL IT 'DRIVER' in function definition
//   //bc it is NOT part of object....
//   modifyMake(make) {
//     this.make = make;
//   }
// }

// let maserati = new Car("Maserati", "GranTurismo", 2015, "auto");
// maserati.modifyMake("Mazda");
// console.log(maserati.greetDriver("Kyle"));

//

/* 
Creates a class that is a "child" of a parent class.
*/

// class Options extends Car {
//   constructor(
//     //needs parameters from the parent
//     //to be inherited from parent
//     make,
//     model,
//     year,
//     transmission,
//     hasLeather,
//     hasComfortAccess,
//     hasSportPackage
//   ) {
//     //DON'T NEED TO BIND with "this."" if it's in original class
//     //Instead use "super"
//     super(make, model, year, transmission);
//     this.hasLeather = hasLeather;
//     this.hasComfortAccess = hasComfortAccess;
//     this.hasSportPackage = hasSportPackage;
//   }
//   isCPO(currentYear) {
//     //creating Method inside of inherited class
//     let result = currentYear - this.year;
//     return result >= 6
//       ? //ternary conditional (? = "if", : = "else")
//         `Your ${this.model} is out of warranty.`
//       : `Your warranty is still active`;
//   }
// }

// let porsche911 = new Options("Porsche", "911", 2017, "PDK", true, true, false);
// console.log(porsche911.isCPO(2025));

//CHALLENGE
//extend House class w one called Sale
//should have appraisalValue, listPrice, agent, isListed
//create method that calcs diff between appraisalValue and listPrice
//add conditional - if list is 20% higher than appraise
//"good deal" v "not worth it" w difference between...

// class Options extends House {
//   constructor(
//     address,
//     bedrooms,
//     bathrooms,
//     foof,
//     appraisalValue,
//     // listPrice,
//     agent,
//     isListed
//   ) {
//     super(address, bedrooms, bathrooms, foof);
//     this.appraisalValue = appraisalValue;
//     // this.listPrice = listPrice;
//     this.agent = agent;
//     this.isListed = isListed;
//   }
//   diffCalc(listPrice) {
//     let dollarDiff = listPrice - this.appraisalValue;
//     let percentDiff = dollarDiff / listPrice;
//     return percentDiff >= 0.2
//       ? `not worth it, the difference is ${dollarDiff}`
//       : `good deal, the difference is ${dollarDiff}`;
//   }
// }

// let condo = new Options(
//   "5 Sunset",
//   "3",
//   "2",
//   "shingle",
//   500000,
//   "Connor",
//   true
// );
// console.log(condo);

class Options extends House {
  constructor(
    address,
    bedrooms,
    bathrooms,
    foof,
    appraisalValue,
    listPrice,
    agent,
    isListed
  ) {
    super(address, bedrooms, bathrooms, foof);
    this.appraisalValue = appraisalValue;
    this.listPrice = listPrice;
    this.agent = agent;
    this.isListed = isListed;
  }
  //method to calculate difference between prices
  diffCalc() {
    let dollarDiff = this.listPrice - this.appraisalValue;
    let percentDiff = dollarDiff / this.listPrice;
    return percentDiff >= 0.2
      ? `not worth it, the difference is ${dollarDiff}`
      : `good deal, the difference is ${dollarDiff}`;
  }
}

//* CREATING AN "INSTANCE" OF CONDO
let condo = new Options(
  "5 Sunset",
  "3",
  "2",
  "shingle",
  500000,
  750000,
  "Connor",
  true
);
console.log(condo.diffCalc());

//DATE is a built-in function
console.log(new Date());
//but we can fuck with it with EXTEND

class DateFormatter extends Date {
  getFormattedDate() {
    //* NO CONSTRUCTOR BC VARIABLES ARE MYRIAD
    //and not needed to perform the function
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    //getDate is another built in fxn
    //others like getMonth as well
    return `${this.getDate()} - ${months[this.getMonth()]}
   - ${this.getFullYear()}`;
  }
}
console.log(new DateFormatter("June 19, 2022, 12:15:00").getFormattedDate());

//* OBJECT ORIENTED PRINCIPLES
// encapsulates objects data and principles by exposing interface
//Inheritance is common, parent SHARES METHODS
//Abstraction of Complexity
// we don't have to worry about underlying language in js
// we build on top
// Polymorphism of behavior
// Behavior responding to messages by name and argument type

//* Encapsulation
// act of keeping data within an object as properties
// and using methods to access that data

const fido = {
  name: "fido",
  color: "brown",

  describe() {
    return `hello my name is ${this.name} and i am ${this.color}`;
  },
};

//these will return the same shit

//Uses data in encapsulated space
console.log(fido.describe());

// this goes out of encapsulation
console.log(`hello my name is ${fido.name} and i am ${fido.color}`);

//difference in use case: security
//one allows injection point into code

//* ABSTRACTION
class Rectangle {
  constructor(height, width) {
    (height = this.height), (width = this.width);
  }
  area() {
    return this.height * this.width;
  }
}
const shape = new Rectangle(10, 8);
console.log(shape);

function showArea(shape) {
  return `this shape's area is ${shape.area()}`;
}

showArea(shape);
