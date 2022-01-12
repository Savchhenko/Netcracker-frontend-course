import { Cake } from "./cake";

const cakeTypeMapping: Record<string, string[]> = {
    "фруктовый": ["фрукты", "вишня", "банан", "персик", "ананас"],
    "ягодный": ["клубника", "малина"],
    "ореховый": ["орехи", "грецкий орех", "фундук"],
    "шоколадный": ["шоколад"],
    "творожный": ["творог"],
    "кремовый": ["крем"]
}

export class CakeType extends Cake {
    cakeType: string[] = [];     
    
    constructor(bakeryName: string, 
                weight: number, 
                caloricContent: number, 
                private filling: string[]) {
        super(bakeryName, weight, caloricContent);
        this.filling = filling;
    }
        
    public get getCakeType(): string[] {
        Object.keys(cakeTypeMapping).forEach((key) => {
            this.filling.filter(val => cakeTypeMapping[key].includes(val)).length === cakeTypeMapping[key].length && this.cakeType.push(key);
        });
    
        return this.cakeType;
    }
}
