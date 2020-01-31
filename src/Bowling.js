'use strict';

class Bowling{
  constructor() {
    this.totalScore = 0;
    this.frames = [
      {rollOne: 0, rollTwo: 0, score: 0},
    ];
  }

  roll(){
    this.totalScore += this._randomRoll();
  }

  currentFrame(){
    return this.frames.length
  }


  _randomRoll(){
  return Math.floor(Math.random() * 11);
  }
}
