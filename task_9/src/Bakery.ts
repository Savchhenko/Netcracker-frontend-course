export class Bakery {
    constructor(private bakeryName: string) {}

    public get getBakeryName(): string {
        return this.bakeryName;
    }

    public set setBakeryName(name: string) {
        this.bakeryName = name;
    }
}