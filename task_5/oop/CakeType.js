import { Cake } from "./Cake.js";

export class CakeType extends Cake {
    constructor(bakeryName, weight, caloricContent, biscuitType, filling) {
        super(bakeryName, weight, caloricContent);
        this._biscuitType = biscuitType;
        this._filling = filling;
        this._hashtagsList = ["фруктовый", "ореховый", "шоколадный", "творожный"];
        this._cakeType = []; 
    }

    // if (this._filling === "фрукты") {

    // }
}
