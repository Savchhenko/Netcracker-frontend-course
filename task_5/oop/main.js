// import { Bakery } from "./Bakery.js";
// import { Cake } from "./Cake.js";
// import { CakeType } from "./CakeType.js";
import { CakeInstance } from "./CakeInstance.js";

const cake1 = new CakeInstance("Прага", 900, "Тортьяна", 1500, 2000, ["крем", "джем"]);
console.log(cake1);
const cake2 = new CakeInstance("Творожно-вишнёвый", 480, "Тортьяна", 950, 1200, ["творог", "вишня"]);
console.log(cake2);

cake2.bakeryName = "Волконский"; //change bakery's name by using setter
console.log(cake2.packing());

console.log(cake2.unpacking());

cake2.divideIntoPortions(8);
cake2.eat();
cake2.weight = 500; //change weight by using setter

cake1.usePromocode("NY2022");
cake2.usePromocode("goodday");
console.log("Цена торта:", cake2.price); //getter


console.log(cake1.cakeType); //work with fields with lists
console.log(cake2.cakeType);

