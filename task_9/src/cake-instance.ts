import { CakeType } from "./cake-type";
import { Pack } from "./pack";

export class CakeInstance extends CakeType {
    packaging: Pack = new Pack("6ps"); //composition example, (6ps - полистирол, маркировка пластика)

    constructor(private cakeName: string, private price: number, bakeryName: string, weight: number, caloricContent: number, filling: string[]) {
        super(bakeryName, weight, caloricContent, filling);
        this.cakeName = cakeName;
        this.price = price;
    }

    get getCakeName(): string {
        return this.cakeName;
    }
    get getPrice(): number {
        return this.price;
    }
    
    packing(): string {
        return this.packaging.packAndDecorate(this.cakeName);
    }
    
    unpacking(): string {
        return this.packaging.unpacking(this.cakeName);
    }

    usePromocode(promocode: string): number | string {
        if (promocode === "goodday") {
            return this.price -= 0.1*this.price;
        } else if (promocode === "NY2022") {
            return this.price -= 0.2*this.price;
        } else {
            return "Срок действия данного промокода истёк.";
        }
    }
}
