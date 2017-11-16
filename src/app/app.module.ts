import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { SnakeComponent } from './snake/snake.component';


@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    SnakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
