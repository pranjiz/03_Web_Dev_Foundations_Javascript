//  JavaScript Errors and Error Handling

variable = "Dave";
console.log(variable);
//  It Works

"use strict";
const variable = "Dave";
console.log(variable);

"use strict";
variable = "Dave";console.log(variable);
//  ReferenceError

Object..create();// SyntaxError

const name1 = "Dave";
name1 = "Joe";
//  TypeError

const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";         //   TypeError: Assignment to constant variable. at makeError 
    }   catch(err) {
        console.log(err);
    }
};
makeError();

const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";         //   TypeError: Assignment to constant variable. at makeError 
    }   catch(err) {
        console.error(err);
    }
};
makeError();

const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";         //   TypeError: Assignment to constant variable. at makeError 
    }   catch(err) {
        console.warn(err);
    }
};
makeError();

const makeError = () => {                                  
    try {
        const name = "Dave";
        name = "Joe";         
    }   catch(err) {
        console.table(err);
    }
};
makeError();
    //  (index)     Value
    // stack      "TypeError"
    // message    "Assignment"
    // TypeError: Assignment to constant variable. at makeError

    const makeError = () => {                                  
        try {
            const name = "Dave";
            name = "Joe";         
        }   catch(err) {
            console.error(err.name);    
        }
    };
    makeError();
    // TypeError

    const makeError = () => {                                  
        try {
            const name = "Dave";
            name = "Joe";         
        }   catch(err) {
            console.error(err.message);    
        }
    };
    makeError();
    // Assignment to constant variable.

    const makeError = () => {                                  
        try {
            const name = "Dave";
            name = "Joe";         
        }   catch(err) {
            console.error(err.stack);    
        }
    };
    makeError();
    //  TypeError: Assignment to constant variable. at makeError 

    const makeError = () => {
        try {
            throw new customError("This is a custom error!");
        } catch (err) {
            console.error(err.name);
            console.error(err.message);
            console.error(err.stack);
        }
    };
    makeError();
    function customError(message) {
        this.message = message;
        this.name = "customError";
        this.stack = `${this.name}: ${this.message}`;
    }
    //  customError
    //  This is a custom error!
    //  customError: This is a custom error!


    const makeError = () => {
        try {
            throw new customError("This is a custom error!");
        } catch (err) {
            console.error(err.name);
            console.error(err.message);
            console.error(err.stack);
        }
    };
    makeError();
    //  Error
    //  This is a error!
    //  Error: This is a error! at makeError

    
    
    const makeError = () => {
        let i = 1;
        while (i <= 5) {
            try {
                if(i%2!==0) {
                    throw new Error("Odd number");
                }
                console.log("Even number!");
            } catch (err) {
                console.error(err.stack);
            } finally {
                console.log("...finally");
                i++;
            }
        }
    };
    makeError();
