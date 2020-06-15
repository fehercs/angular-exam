import { Component, OnInit } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
import {Pet} from "../models/pet.model";

@Component({
  selector: 'app-animals',
  template: `
    <div *ngFor="let animal of animals$ | async" [animal]="animal">
      <div appColor [isCat]="animal.type === 1">
        <app-animal *ngFor="let animal of animals$ | async" [animal]="animal">
          <h4>{{ animal.name }}</h4>
          <p>{{ animal.type }}</p>
          <p> {{ animal.description | maxLength}}</p>
        </app-animal>
      </div>

    </div>
  `,
  styles: [
  ]
})
export class AnimalsComponent implements OnInit {
  public animals$: Observable<Pet[]> = this.petService._pets$;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

}
