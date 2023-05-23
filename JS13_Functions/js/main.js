// Functions

// Function Declaration Syntax:

function sum(num1, num2) {
   return  num1+num2;
}
console.log(sum(2, 6));

//////////////
function sum(num3,num4) {
   if (num3 === undefined) {
      return num3 + num4;
   }
   return num3 + num4;
}
console.log(sum(2)); 
console.log(sum(2, 10)); 
/////////////
function getUserNameFromEmail(email) {
   return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));  
console.log(getUserNameFromEmail("user@Github.com"));  
//////////////

const getUserNameFromEmail = (email) => {
   return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("john@davesdomain.com"));

///////////////////////
const toProperCase = (name5) => {
   return name5.charAt(0).toUpperCase() +  name5.slice(1).toLowerCase();
};

console.log(toProperCase("september"));

/////////// Function Reusable Code!