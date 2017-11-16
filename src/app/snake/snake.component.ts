import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  constructor() { }
  key: String;
  x: number;
  y: number;
  ctx: any;

  ngOnInit() {
    let canvas = document.getElementById("garden");
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "green";
    this.x = 0;
    this.y = 0;
    this.ctx.fillRect(this.x,this.y,25,25);
  }
  // in intervals of 1 sec, move snake
  @HostListener('document: keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    // prevent moving opposite direction
    if (this.key === 'ArrowRight' && event.key !== 'ArrowLeft') {
      this.key = event.key;
      this.clear();
      this.move();
      this.update();
    } else if (this.key === 'ArrowLeft' && event.key !== 'ArrowRight') {
      this.key = event.key;
      this.clear();
      this.move();
      this.update();
    } else if (this.key === 'ArrowUp' && event.key !== 'ArrowDown') {
      this.key = event.key;
      this.clear();
      this.move();
      this.update();
    } else if (this.key === 'ArrowDown' && event.key !== 'ArrowUp') {
      this.key = event.key;
      this.clear();
      this.move();
      this.update();
    } else if (this.key === undefined) {
      if (event.key === 'ArrowUp' ||
          event.key === 'ArrowDown' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight') {
            this.key = event.key;
            this.clear();
            this.move();
            this.update();
      }
    }
  }

  clear() {
    // clear snake
    this.ctx.clearRect(0, 0, 600, 600);
  }
  update() {
    // update position and save
    this.ctx.save();
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, 25, 25);
  }

  move() {
    if (this.key === 'ArrowUp') {
      this.y -= 25;
      console.log('moving up: ', this.y);
      
    } else if(this.key === 'ArrowDown') {
      this.y += 25;
      console.log('moving down: ', this.y);
    } else if (this.key === 'ArrowRight') {
      this.x += 25;
      console.log('moving right: ', this.x);
    } else {
      this.x -= 25;
      console.log('moving left: ', this.x);
    }
  }
}
