'use strict';

class Bowling{
  constructor() {
    this.totalScore = 0;
  }

  roll(){
    this.totalScore += this._randomRoll();
  }


  _randomRoll(){
  return Math.floor(Math.random() * 11);
  }
}
