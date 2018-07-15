'use strict';

function Game() {
  this.MAX_ROLLS = 2;

  this._frames = [];
  this._rolls = 0;
  // this property records total pins hit in a Frame
  this._totalPinsHitFrame = 0;
  this._score = new Score();
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

Game.prototype.getFrames = function() {
  return this._frames.length;
};

Game.prototype.roll = function(kockedDownPins) {
  if (this._rolls === 0) {
    this._score.storeRollScore(kockedDownPins);
    this._totalPinsHitFrame += kockedDownPins;
    this._rolls += 1;
    this.getBonus();
    return "roll again"
  } else {
    this._score.storeRollScore(kockedDownPins);
    this._totalPinsHitFrame += kockedDownPins;
    this._rolls += 1; // 2 rolls
    this.getBonus();
    this._score.calculateScore(this._totalPinsHitFrame);
    // this.addFrame();
      if (this._frames.length <= 10 && this._rolls === 2) {
        this._frames.push('X');
      };
    this._totalPinsHitFrame = 0; // reset pins hit
    this._rolls = 0 // reset rolls
  }
  return this._rolls;
};

Game.prototype.getBonus = function() {
   return this._score.checkBonus(this._score._rollScore.length);
};

Game.prototype.getScore = function() {
  return this._score.getScore();
};

//
// Game.prototype.array = function() {
//   return this._calculate._rollScore.length;
// };
