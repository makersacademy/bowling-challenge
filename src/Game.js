'use strict';

function Game() {
  this.frame = 0; // for frame 1 to 10
  this.rollHistory = new Array(21); // holds all rolls history (max 21). Index is referred to as roll_index
  this.frameHistory = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]];
  this.rollIndex = 0; // 0 to 20 for all potential rolls
  this.frameIndex = 0; // will be 0,1,2 for rolls in frame
  //this.totalScore = 0;
  this.currentRoll = 0; // I don't think this is reqd
}

Game.prototype.roll = function roll(pins) {
  this.rollHistory[this.rollIndex] = (pins);
  this.frameHistory[this.frame][this.frameIndex] = pins;
  if (this._isStrike(this.rollIndex)) {
    console.log('rolls' + pins + 'for a strike');
    this.rollIndex += 2;
    this.frame += 1; // new frames please
    this.frameIndex = 0; //reset to initial index for frame
  }
  else {
    console.log('rolls' + pins + 'not a strike');
    this.rollIndex += 1;
    if (this.frameIndex === 0) {
      this.frameIndex += 1
    }
    else {
      this.frame += 1; // new frames please
      this.frameIndex = 0; //reset to initial index for frame
    }
  }
  this.currentRoll = pins;
  return pins;
};

Game.prototype.score = function score() {
  var score = 0
  for (this.frame = 0; this.frame < 10; this.frame += 1) {
    if (this._isStrike(this.rollIndex)) {
      score += 10 // + strikeBonus;
      // frameIndex++;
    } else if (this._isSpare(this.frame)) {
        score += 10 + this.spareBonus(this.frame);
        // frameIndex += 2;
    } else {
        score += this._FrameTotal(this.frame);
        // frameIndex += 2;
    }
  }
  return score;
};

Game.prototype._FrameTotal = function (frame) {
  return this.frameHistory[frame][0] + this.frameHistory[frame][1];
};

// need to sort out how to hold frameIndex
Game.prototype._isSpare = function (frame) {
  return this.frameHistory[frame][0]+this.frameHistory[frame][1] === 10;
};

Game.prototype._isStrike = function (rollIndex) {
  return this.rollHistory[rollIndex] === 10;
};

Game.prototype.spareBonus = function (frame) {
  return this.frameHistory[frame + 1][0];
};