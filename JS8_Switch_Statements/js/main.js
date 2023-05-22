// Conditionals: Switch Statements

// Syntax
// switch (expression OR value) {

//     case choice1:
//         //run this code
//         break;

//     case choice2:
//         //run this different code
//         break;

//     // add as many cases as needed 

//     default:
//     //  run this code if no case matches
//     // no need for a break here
// }

switch ("2") {

    case 1:
    console.log(1);
    break;
    
    case 2:
    console.log(2);
    break;
    
    case 3:
    console.log(3);
    break;
    
    default:
     console.log("No Match");
}

/////////////////
switch (2) {

    case 1:
    console.log(1);
    break;
    
    case 2:
    console.log(2);
    break;
    
    case 3:
    console.log(3);
    break;
    
    default:
     console.log("No Match");
}
//////////////////////
switch (Math.floor(Math.random() * 3 + 1)) {

    case 1:
    console.log(1);
    break;
    
    case 2:
    console.log(2);
    break;
    
    case 3:
    console.log(3);
    break;
    
    default:
     console.log("No Match");
}
///////////

let playerOne = "rock";
let computer = "paper";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
        case "rock":
         if(computer === "paper") {
            console.log("computer wins!");
         } else {
            console.log("playerOne wins!");
         }
         break;
         case "paper":
         if(computer === "scissors") {
            console.log("computer wins!");
         } else {
            console.log("playerOne wins!");
         }
         break;
         default:
            if(computer === "rock") {
                console.log("computer wins!");
             } else {
                console.log("playerOne wins!");
             }
}