import { Component } from "@angular/core";
import { AppService } from "./app.service";
import { Pet } from "./pet/pet";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AppService]
})
export class AppComponent {
  public btnText: string = "Скрыть котиков";
  public petsList: Pet[] = this.service.getPetsList();

  constructor(private service: AppService) {}

  public changeStatus(id: number): void {
    this.service.getPetById(id).isActive = !this.service.getPetById(id).isActive;
  }

  public checkStatus(id: number): boolean {
    return this.service.getPetById(id).isActive;
  }

  public toggleCats() {
    if (this.btnText === "Скрыть котиков") {
      this.btnText = "Показать котиков";
      this.petsList = this.service.filterPetsList();
    } else {
      this.btnText = "Скрыть котиков";
      this.petsList = this.service.getPetsList();
    }
  }
}
