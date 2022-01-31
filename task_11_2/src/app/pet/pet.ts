export class Pet {
    public isActive: boolean = false;

    constructor(public id: number,
                public type: string,
                public name: string,
                public age: number,
                public weight: number,
                public characteristics: Array<string>,
                public trainability: boolean,
                public numberOfCommands?: number,
                public commands?: Array<string>
    ) {}
}