'use strict';

function Game() {
  this.frame = 0; // for frame 1 to 10
  this.rollHistory = new Array(21); // holds all rolls history (max 21). Index is referred to as roll_index
  this.frameHistory = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]];
  this.rollIndex = 0; // 0 to 20 for all potential rolls
  this.frameIndex = 0; // will be 0,1,2 for rolls in frame
}

Game.prototype.roll = function roll(pins) {
  this.rollHistory[this.rollIndex] = (pins);
  this.frameHistory[this.frame][this.frameIndex] = pins;
  if (this._isStrike(this.frame)) {
    console.log('rolls ' + pins + ' for a strike');
    this.rollIndex += 2;
    this.frame += 1; // new frames please
    this.frameIndex = 0; //reset to initial index for frame
  }
  else {
    console.log('rolls ' + pins + ' not a strike');
    this.rollIndex += 1;
    if (this.frameIndex === 0) {
      this.frameIndex += 1
    }
    else {
      this.frame += 1; // new frames please
      this.frameIndex = 0; //reset to initial index for frame
    }
  }
  return pins;
};

Game.prototype.score = function score() {
  var score = 0
  for (this.frame = 0; this.frame < 10; this.frame += 1) {
    if (this._isStrike(this.frame)) {
      score += 10 + this.strikeBonus(this.frame);
    } else if (this._isSpare(this.frame)) {
        score += 10 + this.spareBonus(this.frame);
    } else {
        score += this._frameTotal(this.frame);
    }
  }
  return score;
};

// shows the pin total for a given frame
Game.prototype._frameTotal = function (frame) {
  return this.frameHistory[frame][0] + this.frameHistory[frame][1];
};

Game.prototype._isSpare = function (frame) {
  return this.frameHistory[frame][0]+this.frameHistory[frame][1] === 10;
};

Game.prototype._isStrike = function (frame) {
  return this.frameHistory[frame][0] === 10;
};

Game.prototype.spareBonus = function (frame) {
  return this.frameHistory[frame + 1][0];
};

Game.prototype.strikeBonus = function (frame) {
  return this._frameTotal(frame + 1);
};