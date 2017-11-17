import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { SnakeComponent } from './snake/snake.component';
import { FruitComponent } from './fruit/fruit.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    SnakeComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
