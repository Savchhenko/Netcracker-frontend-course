import { Bakery } from "./bakery";

export class Cake extends Bakery {
    constructor(bakeryName: string, private weight: number, private caloricContent: number) {
        super(bakeryName);
    }

    get cakeCharacteristics(): object {
        return {
            weight: this.weight,
            caloricContent: this.caloricContent
        }
    }
    set setWeight(newWeight: number) {
        this.weight = newWeight;
    }

    eat(): number {
        if (this.weight) {
            console.log("Тортик кушают...");
            this.weight -= 50; // 50 grams
        } else {
            console.log("Торт съеден");
        }
        return this.weight;
    }

    divideIntoPortions(numberOfPortions: number): void {
        console.log(`
        Торт поделили на ${numberOfPortions} порций.
        Вес каждой порции - ${this.weight/numberOfPortions} гр
        Калорийность каждой порции - ${this.caloricContent/numberOfPortions} кк
        `);
    }
}
