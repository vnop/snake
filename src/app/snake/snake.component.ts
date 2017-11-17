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
  tail: any[];
  // rename test variable
  test: number;

  ngOnInit() {
    let canvas = document.getElementById("garden");
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "green";
    this.x = 0;
    this.y = 0;
    this.tail = [];
    this.ctx.fillRect(this.x,this.y,25,25);
    this.test = 0;
  }
  // in intervals of 1 sec, move snake
  @HostListener('document: keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    // prevent moving opposite direction
    if (this.key === 'ArrowRight' && event.key !== 'ArrowLeft') {
      this.key = event.key;
    } else if (this.key === 'ArrowLeft' && event.key !== 'ArrowRight') {
      this.key = event.key;
    } else if (this.key === 'ArrowUp' && event.key !== 'ArrowDown') {
      this.key = event.key;
    } else if (this.key === 'ArrowDown' && event.key !== 'ArrowUp') {
      this.key = event.key;
    } else if (this.key === undefined) {
      if (event.key === 'ArrowUp' ||
          event.key === 'ArrowDown' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight') {
            this.key = event.key;
            this.clear();
            this.move();
            this.update();
            this.startGame();
      }
    }
  }

  grow(x, y) {
    // add tail
    console.log('adding tail');
    this.ctx.fillRect(x, y, 23, 23);
    this.tail.push([x, y]);
  }
  startGame() {
    // add speed
    setInterval(() => {
      this.test++;
      this.clear();
      this.move();
      this.update();
    }, 1000);
  }
  clear() {
    // clear snake
    this.ctx.clearRect(0, 0, 600, 600);
  }
  update() {
    // update position and save
    this.ctx.save();
    this.ctx.fillStyle = "green";
    for (let i = 0; i < this.tail.length; i++) {
      let tail = this.tail[i];
      this.ctx.fillRect(tail[0], tail[1], 23, 23);
    }
    this.ctx.fillRect(this.x, this.y, 23, 23);
  }

  move() {
    // add tail
    if (this.test === 5 || this.test === 10) {
      this.grow(this.x, this.y);
    }
    if (this.key === 'ArrowUp') {
      this.y -= 25;
      console.log('moving up: ', this.y);
      // update position of tail
      if (this.tail.length > 0) {
        for (let i = 1; i < this.tail.length; i++) {
          let prev = this.tail[i - 1];
          this.tail[i] = prev;
        }
        this.tail[0] = [this.x, this.y + 25];
      }
    } else if(this.key === 'ArrowDown') {
      this.y += 25;
      console.log('moving down: ', this.y);
      // update position of tail
      if (this.tail.length > 0) {
        for (let i = 1; i < this.tail.length; i++) {
          let prev = this.tail[i - 1];
          this.tail[i] = prev;
        }
        this.tail[0] = [this.x, this.y - 25];
        console.log('TAIL: ', this.tail);
      }
    } else if (this.key === 'ArrowRight') {
      this.x += 25;
      console.log('moving right: ', this.x);
      // update position of tail
      if (this.tail.length > 0) {
        for (let i = 1; i < this.tail.length; i++) {
          let prev = this.tail[i - 1];
          this.tail[i] = prev;
        }
        this.tail[0] = [this.x - 25, this.y];
      }
    } else {
      this.x -= 25;
      console.log('moving left: ', this.x);
      // update position of tail
      if (this.tail.length > 0) {
        for (let i = 1; i < this.tail.length; i++) {
          let prev = this.tail[i - 1];
          this.tail[i] = prev;
        }
        this.tail[0] = [this.x + 25, this.y];
      }
    }
  }
}
