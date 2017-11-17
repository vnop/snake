import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor(private data: DataService) { }
  ctx: any;
  x: number;
  y: number;

  ngOnInit() {
    // let canvas = document.getElementById("garden");
    // this.ctx = canvas.getContext("2d");
    // this.ctx.fillStyle = "red";
    // this.x = 50;
    // this.y = 100;
    // this.ctx.fillRect(this.x, this.y, 25, 25);
    //on init give data position of fruit
    this.relocate();
  }

  relocate() {
    console.log('FROM FRUIT COMP');
    // update new position to data
    this.data.fruitPos.x = Math.floor(Math.random() * 601);
    this.data.fruitPos.y = Math.floor(Math.random() * 601);
    this.data.fruitPos.eatten = false;
  }
}
