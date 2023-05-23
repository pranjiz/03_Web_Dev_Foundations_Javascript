// var, let, and const

// var
var x = 1;
var x = 2;
console.log(x);
// let
let x=1;
x =2;
console.log(x);
// const
const x =1;
x = 2;
console.log(x);

// global scope
var x=1;
let y=2;
const z=3;



// local scope
function myFunc() {
   const z = 5;
   console.log(z);
   console.log(y);

   // local scope
{
   const y = 4;
   console.log(y);
}
}
myFunc();





///////////////////////////////////////////////
// global scope
var x1 =1;// function scoped
let y2 = 2;// block scoped
const z3 = 3;

console.log(`global: ${x1}`);
console.log(`global: ${y2}`);
console.log(`global: ${z3}`);

function myFunc () {
   console.log(`function: ${x1}`);
   console.log(`function: ${y2}`);
   console.log(`function: ${z3}`);

   {
      console.log(`block: ${x1}`);
      console.log(`block: ${y2}`);
      console.log(`block: ${z3}`);
   }
}

myFunc();

/////////////////////////////////////

var x1 =1;// function scoped
let y2 = 2;// block scoped
const z3 = 3;

console.log(`global: ${x1}`);
console.log(`global: ${y2}`);
console.log(`global: ${z3}`);

function myFunc () {
   var x = 10;
   const z = 5;
   {
      var  x=11;// Function scoped
      const z =6;// Block scoped
   console.log(`function: ${x1}`);
   console.log(`function: ${y2}`);
   console.log(`function: ${z3}`);
}
      console.log(`block: ${x1}`);
      console.log(`block: ${y2}`);
      console.log(`block: ${z3}`);
}

myFunc();