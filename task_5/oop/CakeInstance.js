import { CakeType } from "./CakeType.js";
import { Box } from "./Box.js";

export class CakeInstance extends CakeType {
    constructor(cakeName, price, bakeryName, weight, caloricContent, filling) {
        super(bakeryName, weight, caloricContent, filling);
        this._cakeName = cakeName;
        this._price = price;
        this._packaging = new Box(); //composition example
    }

    get cakeName() {
        return this._cakeName;
    }
    get price() {
        return this._price;
    }
    
    packing() {
        return this._packaging.packAndDecorate(this._cakeName);
    }
    
    unpacking() {
        return this._packaging.unpacking(this._cakeName);
    }

    usePromocode(promocode) {
        if (promocode === "goodday") {
            return this._price -= 0.1*this._price;
        } else if (promocode === "NY2022") {
            return this._price -= 0.2*this._price;
        } else {
            return "Срок действия данного промокода истёк.";
        }
    }
}