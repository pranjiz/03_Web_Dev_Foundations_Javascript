// Conditionals: If Statements

// Syntax
// if (condition) {
//     //run some code
// } else {
//     //run some different code
// }

let soup = "chicken noodle soup";
let reply;
if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);

//  Conditionals: If Statements
let customerIsBanned = true;
let soup1 = "chicken noodle soup";
let reply1;
if (customerIsBanned) {
    reply1 = "No soup for you!";
}   else if (soup1) {
    reply1 = `Here's your order of ${soup1}`;
}   else {
    reply1 = "Sorry, we're out of soup.";
}
console.log(reply1);

//  Conditionals: If Statements
let customerIsBanned1 = false;
let soup2 = "chicken noodle soup";
let crackers = true;
let reply2;
if (customerIsBanned1) {
    reply = "No soup for you!";
}   else if (soup2 && crackers) {
    reply2 = `Here's your order of ${soup} & crackers.`;
}   else if (soup2) {
    reply2 = `Here's your order of ${soup2}`;
}   else {
    reply2 = "Sorry, we're out of soup.";
}
console.log(reply2);

///////
let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90){
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
}  else if (testScore >= 70) {
    grade = "C";
}   else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}
console.log(grade );

// Decision Tree for Rock Paper Scissor Game
if (playerOne === computer) {
    // tie game!
}   else if (playerOne == "rock") {
    if ( computer === "paper") {
        // computer wins
    } else {
        // playerOne wins
    }
}   else if (playerOne === "paper") {
    if (computer === "scissors") {
        // computer wins
    } else {
        // playerOne wins
    }
} else {
    if (computer === "rock") {
        // computer wins
    } else {
        // playerOne wins
    }
}