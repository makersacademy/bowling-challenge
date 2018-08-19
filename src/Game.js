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
  this._setupNextRoll(this.frame, this.frameIndex);
  return pins;
};

Game.prototype._setupNextRoll = function (frame, frameIndex) {
  if (this._isStrike(frame)) {
    this.rollIndex += 2;
    this._setupNewFrame();
  }
  else {
    this.rollIndex += 1;
    if (frameIndex === 0) {
      this.frameIndex += 1
    }
    else {
      this._setupNewFrame();
    }
  }
};

Game.prototype._setupNewFrame = function () {
  this.frame += 1; // new frames please
  this.frameIndex = 0; //reset to initial index for frame
};

Game.prototype.score = function score() {
  var score = 0
  for (this.frame = 0; this.frame < 10; this.frame += 1) {
    if (this._isStrike(this.frame)) {
      score += 10 + this._strikeBonus(this.frame);
    } else if (this._isSpare(this.frame)) {
        score += 10 + this._spareBonus(this.frame);
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

Game.prototype._spareBonus = function (frame) {
  if (this._finalFrame(frame)) {
    return this.frameHistory[frame][2];
  }
  else {return this.frameHistory[frame + 1][0]}
};

Game.prototype._strikeBonus = function (frame) {
  if (this._finalFrame(frame)) {
    return this._frameTotal(frame);
  }
  else {return this._frameTotal(frame + 1)}
};

Game.prototype._finalFrame = function (frame) {
  return frame === 10;
};

// Final frame rolled strike or spare requiring third roll
Game.prototype._finalFrameBonusBall = function (frame) {
  return this._finalFrame(frame) && this._frameTotal(frame) >= 10 && this.frameIndex < 2;
};
