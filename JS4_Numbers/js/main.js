//  Numbers

//  An integer is a whole number.
const myNumber = 42;

console.log(myNumber);
// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;
console.log(myFloat);
const myFloat1 = 42.01;
console.log(myFloat1);
const myString = "42";
console.log(myString);
console.log(myNumber === myFloat1);
console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Pranjiz"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// Numbers

const myNumber1 = 42;
const myFloat2 = 42.01;
const myString3 = "42";

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger(myNumber1));
console.log(Number.isInteger(myFloat2));
console.log(Number.isInteger(myString3));

//The Number.parseFloat() method parses an arguement and returns a floating point number. If a number cannot be parsed from the arguement, it returns NaN.

console.log(Number.parseFloat(myString3));
console.log(Number.parseFloat(myFloat2));
console.log(Number.parseFloat(myNumber1));

const myString4 = "42.123abc";
console.log(Number.parseFloat(myString4));

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.

const myFloat6 = 42.0151;
console.log(myFloat6.toFixed(2));

// The Number.parseInt() method parses a string arguement and returns an integer

console.log(Number.parseInt(myString4));

// The toString() method returns a string representing the number.

console.log(myFloat6.toString());
console.log(typeof Number.parseFloat(myString4));

// Chaining = Using several methods chained together

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

// Numbers 

// Nan is an acronym for Not a Number

console.log(Number("Dave"));

//The Number.isNan() method determines whether the passed value is Nan AND its type is Number.
Number.isNaN()

console.log(Number.isNaN("Dave"));

// The global isNan() function determines whether a value is NaN or not.

console.log(isNaN("Dave")); 