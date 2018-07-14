'use strict';

function Game() {
  this.MAX_ROLLS = 2;

  this._frames = [];
  this._rolls = 0;
  // this property records total pins hit in a Frame
  this._pinsHit = 0;
  this._calculate = new CalculateScore();
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

Game.prototype.getFrames = function() {
  return this._frames.length;
};

Game.prototype.roll = function(kockedDownPins) {
  if (this._rolls === 0) {
    this._calculate.storeRollScore(kockedDownPins);
    this._pinsHit += kockedDownPins;
    this._rolls += 1;
    return "roll again"
  } else {
    this._rolls += 1; // 2 rolls
    this._calculate.storeRollScore(kockedDownPins);
    this._pinsHit += kockedDownPins;
    this._calculate.calculateScore(this._pinsHit);
    this._pinsHit = 0;
  }

  // TODO this logic is not in the corretc place
  // if(this.pinsHit === 10 && this._rolls === this.MAX_ROLLS) {
  //   this.getBonus();
  // }

  // 2 rolls = a completed Frame
  if (this._frames.length <= 9 && this._rolls === this.MAX_ROLLS) {
    this._frames.push('X');


  }
  return this._rolls;
};

Game.prototype.score = function() {
  // return this._score
  return this._calculate.getScore();
};

Game.prototype.getBonus = function() {
  // return this._score
   return this._calculate.bonus(this._calculate._rollScore.length);
};

Game.prototype.array = function() {
  return this._calculate._rollScore.length;
};
