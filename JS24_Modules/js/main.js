// Modules
// With applying Module type strict mode is automatically applied
import playGuitar from "./guitar.js";
import { shredding as shred, plucking as pluck} from "./guitar.js";
// with dot Relative Path
// without dot Absolute Path
console.log(playGuitar());
console.log(shred());
console.log(pluck());  

//************************** */
import * as Guitars from "./guitar.js";
import User from "./user.js";
const me = new User("email@email.com", "Pranjal");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
// User {_id: "email@email.com", _name:"Pranjal"}
// Hi, my name is Pranjal.
// Playing guitar!
// Shredding some licks!
// Plucking the strings...

 