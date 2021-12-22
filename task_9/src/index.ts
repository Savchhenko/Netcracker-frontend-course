// import { Bakery } from "./bakery";
// import { Cake } from "./cake";
// import { CakeType } from "./cake-type";
import { CakeInstance } from "./cake-instance";

const cake1: CakeInstance = new CakeInstance("Прага", 900, "Тортьяна", 1500, 2000, ["крем", "джем"]);
console.log(cake1);
const cake2: CakeInstance = new CakeInstance("Творожно-вишнёвый", 480, "Тортьяна", 950, 1200, ["творог", "вишня"]);
console.log(cake2);

cake2.setBakeryName = "Волконский"; //change bakery's name by using setter
console.log(cake2.packing());

console.log(cake2.unpacking());

cake2.divideIntoPortions(8);
cake2.eat();
cake2.setWeight = 500; //change weight by using setter

cake1.usePromocode("NY2022");
cake2.usePromocode("goodday");
console.log("Цена торта:", cake2.getPrice); //getter


console.log(cake1.cakeType); 
console.log(cake2.cakeType);
