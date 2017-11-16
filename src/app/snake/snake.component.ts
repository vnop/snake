import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  constructor() { }
  key: String;
  
  ngOnInit() {
    let canvas = document.getElementById("garden");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(10,100,50,50);
  }
  // in intervals of 1 sec, move snake
  @HostListener('document: keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    // prevent moving opposite direction
    if (this.key !== event.key) {
      this.key = event.key;
      this.move(this.key);
    }
  }

  move(dir) {
    console.log('moving');
  }
}
