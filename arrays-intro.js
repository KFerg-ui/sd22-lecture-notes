// introduction to arrays
['a string', 10, true];
//square brackets ([]) hold array
//things inside array are "items"

//zero indexed - so "item 1 (string)" is indexed as 0

let value = true; //Boolean, data type, not Array or Object
let myNumber = 42; //Number, data type
let myArray = []; //Array, Object, data type

let hello = function (message) {
    return `hello, ${message}!`;
}
myArray = [
    1,
    "string",
    true,
    false,
    [
        'look, another array',
        'can we have another?',
        [
            'an array inside an array inside an array'
            //can go as far as you like...
        ]
    ],
    hello
    //function defined above
]

// console.log('the array is:', myArray);
// console.log('Calling function:', myArray[5]('Kyle!'));


//* SYNTAX

let fruits = ['apple', 'banana', 'cherry']; //start
//want to add 'blueberry' & 'pineapple'
    //COULD DO fruits[4]='blueberry', fruits[5]='pineapple' 
        //but that's problematic because
        //fruits [42]='peach' will ADD LOADS OF BLANK ITEMS
// console.log(fruits);
// fruits[3]='blueberry';
// console.log(fruits);
// fruits[4]='pineapple';
// console.log(fruits);
// fruits[42]='peach';
// console.log(fruits);
// console.log(fruits[25])
//    will return 37 empty spaces between peach and pineapple
//    will return undefined at 25 

console.log(fruits)
console.log('the array is this long:', fruits.length);
//.length is giving length in NON ZERO INDEX
//so to add something to the end of the array .length is PERFECT bc it adds one

fruits[fruits.length]='blueberry';
console.log(fruits);
console.log(fruits.length);
fruits[fruits.length]='pineapple';
fruits[fruits.length]='peach';
console.log(fruits.length);
console.log(fruits);

//.push does similar thing

// fruits.push('avocado');
// console.log(fruits);

//*GENERAL NOTE 
//*Make small changes and run code repeatedly to confirm expectations
    //will save you from losing track of where the error is
    //keeps cycle "tight" (small range for error/correction)

//to get last item in array 
// console.log(fruits[fruits.length - 1]);
// fruits[0]='apricot'
//will replace first item w apricot
// console.log(fruits)

//to replace and move first to last
// let firstFruit = fruits[0]
// fruits.push(firstFruit)
// console.log(fruits)

// fruits.sort();
// console.log(fruits)
//keeps adding apricot bc it's added at 0 above

// fruits.push(['nectarine', 'strawberry']);
// console.log(fruits);
//strawberry is now at index [7][1]
        //seventh index of first array, first index of included array

        // console.log(`the sub array's last item is:`, fruits[7][1]);
        //this can be performed within 'infinite' embedded arrays

// let lastItem=fruits.pop();
        //REMOVES last item from array and displays it
        //remember that altering things in small places can
        //fuck things up later.
        // unnecessary alterations can be badddddd
// console.log(fruits);
// console.log(lastItem);

console.log(fruits)
