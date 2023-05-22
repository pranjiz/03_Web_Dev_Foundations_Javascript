// User Input
alert("Hello World!");

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name1 = prompt("Please enter your name.");
console.log(name1);
////////////////////////////

let name2 = prompt("Please enter your name.");
if (name2) {
   console.log(name2);
} else {
   console.log ("You didn't enter your name.");
}

/////////////////////////////////////
let name3 = prompt("Please enter your name.");
if (name3) {
   console.log(name3.length);
   console.log(name3.trim().length);
   console.log(name3.trim());
} else {
   console.log ("You didn't enter your name.");
}
