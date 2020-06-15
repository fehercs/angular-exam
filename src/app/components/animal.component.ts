import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../models/pet.model";

@Component({
  selector: 'app-animal',
  template: `
    <ng-content>

    </ng-content>
  `,
  styles: [
  ]
})
export class AnimalComponent implements OnInit {
  @Input() public animal: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}
