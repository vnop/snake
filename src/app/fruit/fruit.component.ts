import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor() { }
  ctx: any;
  x: number;
  y: number;

  ngOnInit() {
    let canvas = document.getElementById("garden");
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "red";
    this.x = 50;
    this.y = 100;
    this.ctx.fillRect(this.x, this.y, 25, 25);
  }

}
