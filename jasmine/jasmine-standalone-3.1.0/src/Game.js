'use strict';

function Game() {
  this.MAX_ROLLS = 2;

  this._frames = [];
  this._rolls = 0;
  // this property records total pins hit in a Frame
  this._totalPinsHitFrame = 0;
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
    this._totalPinsHitFrame += kockedDownPins;
    this._rolls += 1;
    this.getBonus();
    return "roll again"
  } else {
    this._calculate.storeRollScore(kockedDownPins);
    this._totalPinsHitFrame += kockedDownPins;
    this._rolls += 1; // 2 rolls
    this.getBonus();
    this._calculate.calculateScore(this._totalPinsHitFrame);
    this._totalPinsHitFrame = 0; // reset pins hit
  }

  // TODO this logic is not in the corretc place
  // if(this.pinsHit === 10 && this._rolls === this.MAX_ROLLS) {
  //   this.getBonus();
  // }

  // 2 rolls = a completed Frame TODO create a function for this
  if (this._frames.length <= 9 && this._rolls === this.MAX_ROLLS) {
    this._frames.push('X');
  }

  // if the total pins hit in a game == 10
  // if (this._totalPinsHitFrame === 10) {
  //   this.getBonus();
  // }

  return this._rolls;
};

Game.prototype.getScore = function() {
  return this._calculate.getScore();
};

// Game.prototype.getBonus = function() {
//    return this._calculate.addBonus(this._calculate._rollScore.length);
// };


Game.prototype.getBonus = function() {
   return this._calculate.checkBonus(this._calculate._rollScore.length);
};


Game.prototype.array = function() {
  return this._calculate._rollScore.length;
};
