import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals.component';
import { AnimalComponent } from './components/animal.component';
import { MaxLengthPipe } from './max-length.pipe';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalComponent,
    MaxLengthPipe,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
