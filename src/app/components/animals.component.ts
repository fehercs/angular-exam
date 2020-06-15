import { Component, OnInit } from '@angular/core';
import {PetService} from "../services/pet.service";
import {Observable} from "rxjs";
import {Pet} from "../models/pet.model";

@Component({
  selector: 'app-animals',
  template: `
    <div>
      <div>
        <app-animal *ngFor="let animal of animals$ | async" [animal]="animal">
          <h4>{{ animal.name }}</h4>
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
