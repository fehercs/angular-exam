import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals.component';
import { AnimalComponent } from './components/animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
