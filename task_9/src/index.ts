import { Bakery } from "./bakery";
import { Cake } from "./cake";
import { CakeType } from "./cake-type";
import { CakeInstance } from "./cake-instance";
import { Factory } from "./factory";

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

//--------------------------------------------------------------
//using factory:
const factory: Factory = new Factory;

const bakery1 = factory.create(Bakery, "Тортьяна");
console.log(bakery1);

const cakeExample = factory.create(Cake, "Тортьяна", 1000, 1800);
console.log(cakeExample);

const nutsCake = factory.create(CakeType, "Гранат", 1000, 1800, "орехи");
console.log(nutsCake);

const belgian = factory.create(CakeInstance, "Бельгийский", 800, "Гранат", 1000, 1800, "орехи");
console.log(belgian);
