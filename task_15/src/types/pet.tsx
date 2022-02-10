class Pet {
    constructor(public id: number, 
                public name: string, 
                public type: string, 
                public gender: string, 
                public age: number,
                public weight: number,
                public superPower: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.superPower = superPower;
    }
}

export default Pet
