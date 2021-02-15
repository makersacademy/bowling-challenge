'use strict';

class BowlingGame {

  constructor() {
    this._rollCount = 0 
    this._rolls = []
  }

roll(pinsdown) {
  this._rolls.push(pinsdown)
  this._rollCount += 1
}

score() {
  let score = 0;
  let frameCount = 0;
  
  for ( let frame = 0; frame < 10; frame++) {
    if (this._rolls[frameCount] == 10) {
      score += 10 + this._rolls[frameCount + 1] + this._rolls[frameCount + 2];
      frameCount++;
    }else if (this._rolls[frameCount] + this._rolls [frameCount + 1] == 10) {
      score += 10 + this._rolls[frameCount + 2];
      frameCount += 2;
    } else {
      score += this._rolls[frameCount] + this._rolls[frameCount + 1];
      frameCount += 2;
    }
  }
  return score;
}

}