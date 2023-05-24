// Arrays
const myArray = [];

// Add elements to an array
myArray[0] = "Dave";
myArray[0] = 1001;
myArray[0] = false;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

myArray.push("school");
console.log(myArray);
const lastItem = myArray.pop();
console.log(lastItem);
// Adding unshift adds an item to the front its the length of the new array that is returned
const newLength = myArray.unshift(42);
console.log(newLength);

// shift takes out the first item from an array
const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[2]);

//////////////////////
delete myArray[1];
console.log(myArray);
console.log(myArray[1]);
// In this the array starts from 1st position and 
// removes the element - 1
// Not to remove the elemenet - 0 
myArray.splice(1,1);
// In this the array starts from 1st position and 
// removes the element at that position with 1
myArray.splice(1,1,42);
// In this the array starts from 1st position and 
// does not removes the element at that position with 0
myArray.splice(1,0,42);

//In this array starts at 2nd position and displays uptill last no. (5) mentioned but not including the last element.
const myArray = ["A", "B", "C", "D", "E", "F"];
const newArray = myArray.slice(2, 5);
console.log(newArray);

//Exact same array everything is reversed
const myArray = ["A", "B", "C", "D", "E", "F"];
myArray.reverse();
console.log(myArray);
// gives output by displaying all the elements together having a comma between them
const newString = myArray.join();
console.log(newString);

// splits the array
const newArray = newString.split(",");

const myArrayA = ["A", "B", "C"]
const myArrayB = [ "D", "E", "F"];
// Concatinates the array together
const newArray = myArrayB.concat(myArrayA);
console.log(newArray);
// Spread Operator
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray);
// Without Spread Operator output would be (2) [Array(3), Array(3)]

const newArray = [myArrayA, myArrayB];
console.log(newArray);

///////
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept);
console.log(clothesDept);
//////////////////////--2 Dimensional Array
console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);
///////////////////////////--3 Dimensional Array
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

