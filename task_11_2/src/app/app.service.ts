import { Injectable } from "@angular/core";
import { Pet } from "./pet/pet";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private petsArray: Array<Pet> = [
    new Pet(0, "Кошка", "Луна", 3, 2, ["интроверт", "своенравная", "убивает моль"], false),
    new Pet(1, "Собака", "Соник", 2, 12, ["активный", "умный", "дрессированный", "любит огурцы"], true, 4, ["рядом", "сидеть", "дай лапу", "ко мне"]),
    new Pet(2, "Попугай", "Павлуша", 2, 0.4, ["добрый", "молчаливый", "плохо летает"], false),
    new Pet(3, "Кот", "Сёма", 1, 4, ["активный", "чистоплотный", "любит смотреть за стиральной машинкой", "ест за троих"], false),
    new Pet(4, "Попугай", "Рики", 2, 0.35, ["вредная", "роняет вещи", "хорошо летает"], false),
  ];

  public getPetsList(): Pet[] {
    return this.petsArray;
  }

  public getPetById(id: number): any {
    for (let i = 0; i < this.petsArray.length; i++) {
      if (this.petsArray[i].id === id) {
        return this.petsArray[i];
      }
    }
  }

  public filterPetsList(): Pet[] {
    return this.petsArray.filter(pet => !(["Кошка", "Кот"].includes(pet.type)));
  }
}
