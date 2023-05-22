// Conditionals : Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

let soup;
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);
//////////////
let soup1 = "Chicken Noodle Soup";
let response1 = soup1 ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response1);

//////////////////////////////
let soup3 = "Chicken Noodle Soup";
let isCustomerBanned3 = false;
let soupAccess = isCustomerBanned3
? "Sorry, no soup for you!"
: soup3
? `Yes, we have ${soup3} today.`
: "Sorry, no soup today.";
console.log(soupAccess);
//////////////////////////

let testScore = 79;
let myGrade =
   testScore > 89? "A"
:  testScore > 79? "B"
:  testScore > 69? "C"
:  testScore > 59? "D"
:  "F";
console.log(`My test grade is a ${myGrade}.`);

/////////////////////////////////////////
let playerOne = "rock";
let computer = "paper";
let result = playerOne === computer ? "Tie game!"
: playerOne === "rock" && computer === "paper" ?"computer wins!"
: playerOne === "paper" && computer === "scissors" ?
"Computer wins!"
: playerOne === "scissors" && computer === "rock" ? "Computer wins!"
: "playerOne wins!";
console.log(result);
