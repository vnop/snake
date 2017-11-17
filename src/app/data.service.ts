import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  fruitPos = {
                x: 0,
                y: 0,
                eatten: false
              };
  
  genRandom() {
    let val = Math.floor(Math.random() * 476);
    this.fruitPos.x = Math.floor(val / 25) * 25;
    this.fruitPos.y = Math.floor(val / 25) * 25;
  }
  //receive eatten signal from snake
  //get new position from fruit
  // getFruit() {
  //   
  // }
  // send new fruit position to snake
}
