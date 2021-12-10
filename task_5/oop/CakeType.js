import { Cake } from "./Cake.js";

export class CakeType extends Cake {
    constructor(bakeryName, weight, caloricContent, filling) {
        super(bakeryName, weight, caloricContent);
        this._filling = filling;
        this._hashtagsList = ["фруктовый", "ягодный", "ореховый", "шоколадный", "творожный", "кремовый"];
        [this._fruit, this._berry, this._nutty, this._chocolate, this._curd, this._cream] = this._hashtagsList;
        this._cakeType = []; 
    }

    get cakeType() {
        if (this._filling.includes("фрукты") || this._filling.includes("вишня") || this._filling.includes("банан") || this._filling.includes("персик") || this._filling.includes("ананас")) {
            this._cakeType.push(this._fruit);
        } 
        if (this._filling.includes("клубника") || this._filling.includes("малина")) {
                this._cakeType.push(this._berry);
        }
        if (this._filling.includes("орехи") || this._filling.includes("грецкий орех") || this._filling.includes("фундук")) {
                this._cakeType.push(this._nutty);
        }
        if (this._filling.includes("шоколад")) {
                this._cakeType.push(this._chocolate);
        }
        if (this._filling.includes("творог")) {
                this._cakeType.push(this._curd);
        }
        if (this._filling.includes("крем")) {
            this._cakeType.push(this._cream);
        }   
        return this._cakeType;
    }
}
