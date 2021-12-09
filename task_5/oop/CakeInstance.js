import { CakeType } from "./CakeType.js";

export class CakeInstance extends CakeType {
    constructor(cakeName, price, bakeryName, weight, caloricContent, biscuitType, filling) {
        super(bakeryName, weight, caloricContent, biscuitType, filling);
        this._cakeName = cakeName;
        this._price = price;
    }
}