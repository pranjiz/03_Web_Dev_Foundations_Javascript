// Loops
let myNumber = 0;
while (myNumber < 50) {
   console.log(myNumber);
   myNumber = myNumber + 1;
   //myNumber++;
}

let myNumber1 = 0;
while (myNumber1 < 50) {
   myNumber1 +=2;
   console.log(myNumber1);
}
//don't create an endless loop

let myNumber3 = 0;
while (myNumber3 < 50) {
   myNumber3 +=2;
   console.log(myNumber3);
}

//don't create an endless loop

do {
   console.log(myNumber3);
}   while(myNumber3 < 50);

//For LOOP

for(let i = 1; i<=10; i++) {
   console.log(i);
}

//////
let name1 = "Pranjal";
for (let i = 0; i<name1.length ; i++){
   console.log(name1.charAt(i));
}

/////////
let name2 = "Pranjal";
let counter = 0;
let myLetter;
while (true) {
   myLetter = name2[counter];
   console.log(myLetter);
   if (myLetter === "j" ) break;
   counter++;
}

///////////////////
let name3 = "Pranjal";
let counter1 = 0;
let myLetter1;
while (counter1 <=3 ) {
   myLetter1 = name3[counter1];
   console.log(myLetter1);
   if (myLetter1 === "j" ) break;
   counter1++;
}
////////////////
let name4 = "Dave";
let counter2 = 0;
let myLetter2;
while (counter2 <= 3){
   myLetter2 = name4[counter2];
   console.log(myLetter2);
   if (counter2 === 1) {
      counter2 += 2;
      continue;
   }
   if (myLetter2 === 'j') break;
   counter2++;
}
console.log(counter2);