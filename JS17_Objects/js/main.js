// Objects
// Key-value pairs in curly braces
const myObj = { name5:"Pranjal"};
console.log(myObj);
console.log(myObj.name5);
/////////////////////
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat","Sleep","Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return "Hello World!";
        
    }
    action: function (){
        return `Time for ${this.beverage.morning}`;
    }
};
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["alive"]);
console.log(anotherObj["beverage"]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

//////////////////////
const vechile = {
    wheels: 4,
    engine: function() {
        return "Vrroooooom";
    }
}

const truck = Object.create(vechile);
truck.doors = 2;
console.log(truck);// {doors: 2}
console.log(truck.wheels); //Inheritance 4
console.log(truck.engine());// Vrroooooom!
const car = Object.create(vechile);
car.doors = 4;
car.engine = function() { 
    return "Whooooosh!";
};
console.log(car.engine());// Whooooosh!
console.log(car.wheels);// 4
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhhhh...";
}
console.log(tesla.engine());

//  Objects
//  Key-value pairs in curly braces
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass:   "John Paul Jones",
    drums:  "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(band[job]);
    console.log(`On ${job}, it's ${band[job]}!`);
}
//  destructuring Objects

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass:   "John Paul Jones",
    drums:  "John Bonham"
};
const {guitar: myVariable, bass: myBass} = band;
console.log(myVariable);
console.log(myBass);
/////////
const { vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);
//////////
function sings({ vocals }) {
    return `${vocals} sings!`;
}

console.log(sings(band));

