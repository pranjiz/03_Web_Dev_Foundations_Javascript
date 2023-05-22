// Strings
const myVariable = "Mathematics";

//  The length property
console.log(myVariable.length);
console.log("Every good boy does fine".length);

// String Methods
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(5));
console.log(myVariable.charAt(6));
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("ati"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("ath"));
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(5));
console.log(myVariable.slice(5,2));
console.log(myVariable.slice(5,6));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John,Joe,Dave".split(","));
console.log("Every good boy does fine".split(","));