import { Component, OnInit, HostListener } from '@angular/core';
// import { DataService } from '../data.service';

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
  fruitPosX: number;
  fruitPosY: number;
  intervalId: any;

  ngOnInit() {
    let canvas = document.getElementById("garden");
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "green";
    this.x = 0;
    this.y = 0;
    this.tail = [];
    this.ctx.fillRect(this.x,this.y,23,23);
    this.fruitPosX = this.genRandom();
    this.fruitPosY = this.genRandom();
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

  genRandom() {
    let val = Math.floor(Math.random() * 476);
    return Math.floor(val / 25) * 25;
  }
  grow(x, y) {
    // add tail
    console.log('adding tail');
    this.ctx.fillRect(x, y, 23, 23);
    this.tail.push([x, y]);
  }
  startGame() {
    // add speed
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.update();
    }, 500);
  }
  clear() {
    // clear snake
    this.ctx.clearRect(0, 0, 600, 600);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    // update position and save
    this.ctx.save();
    this.ctx.fillStyle = "green";
    // tail
    for (let i = 0; i < this.tail.length; i++) {
      let tail = this.tail[i];
      this.ctx.fillRect(tail[0], tail[1], 23, 23);
    }
    // head
    this.ctx.fillRect(this.x, this.y, 23, 23);
    // draw fruit
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.fruitPosX,
                      this.fruitPosY,
                      23,
                      23);
  }

  move() {
    if (this.key === 'ArrowUp') {
      if (this.y === 0) {
        this.stop();
      } else {
        this.y -= 25;
        for (let i = 0; i < this.tail.length; i++) {
          let pos = this.tail[i];
          if (this.x === pos[0] && this.y === pos[1]) {
            this.stop();
            break;
          }
        }
        console.log('moving up: ', this.y);
        if (this.x === this.fruitPosX && this.y === this.fruitPosY) {
          this.grow(this.x, this.y);
          this.fruitPosX = this.genRandom();
          this.fruitPosY = this.genRandom();
        }
        // update position of tail
        if (this.tail.length > 0) {
          let prev = this.tail[0];
          for (let i = 1; i < this.tail.length; i++) {
            let curr = this.tail[i];
            this.tail[i] = prev;
            prev = curr;
          }
          this.tail[0] = [this.x, this.y + 25];
        }
      }
    } else if(this.key === 'ArrowDown') {
      if (this.y === 475) {
        this.stop();
      } else {
        this.y += 25;
        for (let i = 0; i < this.tail.length; i++) {
          let pos = this.tail[i];
          if (this.x === pos[0] && this.y === pos[1]) {
            this.stop();
            break;
          }
        }
        console.log('moving down: ', this.y);
        if (this.x === this.fruitPosX && this.y === this.fruitPosY) {
          this.grow(this.x, this.y);
          this.fruitPosX = this.genRandom();
          this.fruitPosY = this.genRandom();
        }
        // update position of tail
        if (this.tail.length > 0) {
          let prev = this.tail[0];
          for (let i = 1; i < this.tail.length; i++) {
            let curr = this.tail[i];
            this.tail[i] = prev;
            prev = curr;
          }
          this.tail[0] = [this.x, this.y - 25];
          console.log('TAIL: ', this.tail);
        }
      }
    } else if (this.key === 'ArrowRight') {
      if (this.x === 475) {
        this.stop();
      } else {
        this.x += 25;
        for (let i = 0; i < this.tail.length; i++) {
          let pos = this.tail[i];
          if (this.x === pos[0] && this.y === pos[1]) {
            this.stop();
            break;
          }
        }
        console.log('moving right: ', this.x);
        if (this.x === this.fruitPosX && this.y === this.fruitPosY) {
          this.grow(this.x, this.y);
          this.fruitPosX = this.genRandom();
          this.fruitPosY = this.genRandom();
        }
        // update position of tail
        if (this.tail.length > 0) {
          let prev = this.tail[0];
          for (let i = 1; i < this.tail.length; i++) {
            let curr = this.tail[i];
            this.tail[i] = prev;
            prev = curr;
          }
          this.tail[0] = [this.x - 25, this.y];
        }
      }
    } else {
      if (this.x === 0) {
        this.stop();
      } else {
        this.x -= 25;
        for (let i = 0; i < this.tail.length; i++) {
          let pos = this.tail[i];
          if (this.x === pos[0] && this.y === pos[1]) {
            this.stop();
            break;
          }
        }
        console.log('moving left: ', this.x);
        if (this.x === this.fruitPosX && this.y === this.fruitPosY) {
          this.grow(this.x, this.y);
          this.fruitPosX = this.genRandom();
          this.fruitPosY = this.genRandom();
        }
        // update position of tail
        if (this.tail.length > 0) {
          let prev = this.tail[0];
          for (let i = 1; i < this.tail.length; i++) {
            let curr = this.tail[i];
            this.tail[i] = prev;
            prev = curr;
          }
          this.tail[0] = [this.x + 25, this.y];
        }
      }
    }
  }
}
