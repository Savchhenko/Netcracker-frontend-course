import { Cake } from "./Cake";

export class CakeType extends Cake {
    // public hashtagsList: string[] = ["фруктовый", "ягодный", "ореховый", "шоколадный", "творожный", "кремовый"];
    // [fruit, berry, nutty, chocolate, curd, cream] = hashtagsList;

    cakeType: string[] = []; 
    
    constructor(bakeryName: string, weight: number, caloricContent: number, private filling: string[]) {
        super(bakeryName, weight, caloricContent);
        this.filling = filling;
    }

    get getCakeType() {
        if (this.filling.includes("фрукты") || this.filling.includes("вишня") || this.filling.includes("банан") || this.filling.includes("персик") || this.filling.includes("ананас")) {
            this.cakeType.push("фруктовый");
        } 
        if (this.filling.includes("клубника") || this.filling.includes("малина")) {
                this.cakeType.push("ягодный");
        }
        if (this.filling.includes("орехи") || this.filling.includes("грецкий орех") || this.filling.includes("фундук")) {
                this.cakeType.push("ореховый");
        }
        if (this.filling.includes("шоколад")) {
                this.cakeType.push("шоколадный");
        }
        if (this.filling.includes("творог")) {
                this.cakeType.push("творожный");
        }
        if (this.filling.includes("крем")) {
            this.cakeType.push("кремовый");
        }   
        return this.cakeType;
    }
}
