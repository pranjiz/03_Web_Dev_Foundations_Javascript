// Javascript Classes
class Pizza {
    constructor() {
        this.size = "medium";
        this.crust = "original"
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza();
myPizza.bake();

//***************************************** */
class Pizza1 {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original"
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust}  crust pizza.`);
    }
}

const myPizza1 = new Pizza1("pepperoni","small");

myPizza1.bake();
console.log(myPizza1.type);

//**************************************** */
class Pizza2 {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    // get pizzaCrust()
    getCrust(){
        return this.crust;
    }
    // set pizzaCrust(pizzaCrust)
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust}  crust pizza.`);
    }
}

const myPizza2 = new Pizza2("pepperoni","small");
// myPizza2.pizzaCrust = "thin";
myPizza2.setCrust("thin");
myPizza2.bake();
// console.log(myPizza2.pizzaCrust);
// console.log(myPizza2.getCrust());
myPizza2.setToppings("sausage");
myPizza2.setToppings("olives");
console.log(myPizza2.getToppings());

//************************************************* */
class Pizza3 {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    // get pizzaCrust()
    getCrust(){
        return this.crust;
    }
    // set pizzaCrust(pizzaCrust)
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();

//********************************************* Javascript Classes ************/
class Pizza4 {
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getcrust() {
        return this._crust;
    }
    setcrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}

//*******   Factory Function ************** */
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza5 = pizzaFactory("small");
myPizza.bake();

//Javascript Classes
class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor (pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log{
            `Here's your ${this.crust} ${this.#sauce} sauce{this.#size} pizza.`
        };
    }
}
const myPizza = new Pizza ("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.#size);
console.log(myPizza.crust);

