import Pet from "../types/pet";

class AppService {
    private petsList: Pet[] = [
        new Pet(1, "Ernest", "Cat", "male", 6, 13, "ability to survive in wild forests"),
        new Pet(2, "Patrick", "Hamster", "male", 1, 0.3, "develops the highest speed in a spinning wheel"),
        new Pet(3, "Ove", "Cat", "male", 4, 3, "an incredible psychologist"),
        new Pet(4, "Paul", "Parrot", "male", 3, 0.2, "can build something out of nothing"),
        new Pet(5, "Ricki", "Parrot", "female", 2, 0.2, "has the most attractive appearance")
    ];

    public getPetList(): Pet[] {
        return this.petsList;
    }
}

export default AppService;