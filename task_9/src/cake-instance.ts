import { CakeType } from "./cake-type";
import { Pack } from "./pack";

export class CakeInstance extends CakeType {
    packaging: Pack = new Pack("6ps"); //composition example, (6ps - полистирол, маркировка пластика)

    constructor(private cakeName: string, 
                private price: number, 
                bakeryName: string, 
                weight: number, 
                caloricContent: number, 
                filling: string[]) {
        super(bakeryName, weight, caloricContent, filling);
        this.cakeName = cakeName;
        this.price = price;
    }

    public get getCakeName(): string {
        return this.cakeName;
    }
    public get getPrice(): number {
        return this.price;
    }
    
    public packing(): string {
        return this.packaging.packAndDecorate(this.cakeName);
    }
    
    public unpacking(): string {
        return this.packaging.unpacking(this.cakeName);
    }

    private promoMapping: Record<string, number> = {
        "goodday": 0.1,
        "NY2022": 0.2
    };

    public usePromocode(promocode: string): number | string {
        return promocode && this.promoMapping[promocode] 
            ? this.price -= this.promoMapping[promocode]*this.price
            : "Срок действия данного промокода истёк.";
    }
}
