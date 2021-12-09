import { Bakery } from "./Bakery.js";

export class Cake extends Bakery {
    constructor(bakeryName, weight, caloricContent) {
        super(bakeryName);
        this._weigth = weight;
        this._caloricContent = caloricContent;
    }

    get cakeCharacteristics() {
        return {
            weight: this._weigth,
            caloricContent: this._caloricContent
        }
    }
    set changeWeight(newWeight) {
        return this._weigth = newWeight;
    }

    eat() {
        if (this._weigth) {
            console.log("Тортик кушают...");
            this._weigth -= 0.2*this._weigth;
        } else {
            console.log("Торт съеден");
        }
        return this._weigth;
    }

    divideIntoPortions(numberOfPortions) {
        console.log(`
        Торт поделили на ${numberOfPortions} порций.
        Вес каждой порции - ${this._weigth/numberOfPortions} гр.
        Калорийность каждой порции - ${this._caloricContent/numberOfPortions} кк.
        `);
    }
}