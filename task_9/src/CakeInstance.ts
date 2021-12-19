import { CakeType } from "./CakeType";
import { Box } from "./Box";

export class CakeInstance extends CakeType {
    packaging: Box = new Box(); //composition example

    constructor(private cakeName: string, private price: number, bakeryName: string, weight: number, caloricContent: number, filling: string[]) {
        super(bakeryName, weight, caloricContent, filling);
        this.cakeName = cakeName;
        this.price = price;
    }

    get getCakeName() {
        return this.cakeName;
    }
    get getPrice() {
        return this.price;
    }
    
    packing() {
        return this.packaging.packAndDecorate(this.cakeName);
    }
    
    unpacking() {
        return this.packaging.unpacking(this.cakeName);
    }

    usePromocode(promocode: string) {
        if (promocode === "goodday") {
            return this.price -= 0.1*this.price;
        } else if (promocode === "NY2022") {
            return this.price -= 0.2*this.price;
        } else {
            return "Срок действия данного промокода истёк.";
        }
    }
}
