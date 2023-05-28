// Web Storage API

//  Not part of the DOM - refers to the Window API
//  Available to JS via the global variable : window

// We do not have to type window. It is implied:

window.alert("ok!");
alert("ok!");

window.alert(window.location);
// returns the URL of the Website 
alert(location);

// Local Storage will store the persistent data and it will continue to store that data in the browser but not attached to the open tab or the open browser so we can reopen our browser go back to the same website and retrieve that data that would be persistent data, stored in the local storage.
const myArray = ["eat", "sleep" , "code"];
const myObject = {
    name: "Dave",
    logName: function() {
        console.log(this.name);
    }
};

// sessionStorage.setItem("mySessionStore", myObject);
 sessionStorage.setItem("mySessionStore", myArray);
// eat, sleep,code
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
//  {name: "Dave", hobbies: Array(3)} hobbies: (3)["eat","sleep","code"] name:"Dave"
console.log(mySessionData);
console.log(typeof mySessionData);

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
// ["eat", "sleep", "code"]

//***** Local Storage ***************
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
//The data remains on the page even after closing the browser window

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();

// These methods clear the data and return null
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);


localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.key(0);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key);
// myLocalStore

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storeLength);
// 1
