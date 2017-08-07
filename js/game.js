'use strict';

function Game(){
  this.complete = false;
  this.score = 0;
  this.currentFrame = new Frame(2);
  this.frames = [];
};

Game.prototype.isComplete = function() {
  return this.complete;
};

Game.prototype.roll = function(pins) {
  this._getCurrentFrame().roll(pins);
  this._finaliseFrameIfRequired();
  this._completeGameIfRequired();
};

Game.prototype.getScore = function() {
  var score = 0;
  var self = this;
  this.frames.forEach(function(frame, i, frames) {

    score += frame.getScore();
    console.log(score);

    if(frame.hasStrike()) {
      score += self._next2Rolls(i);
    };

    if(frame.hasSpare()) {
      score += self._nextRoll(i);
    };
  });

  return score;
};

// Private implementation

Game.prototype._startNewFrame = function() {
  var maxRolls = this.frames.length < 9 ? 2 : 3;
  this.currentFrame = new Frame(maxRolls);
};

Game.prototype._getCurrentFrame = function() {
  return this.currentFrame;
};

Game.prototype._addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype._finaliseFrameIfRequired = function() {
  if(this._getCurrentFrame().isComplete()) {
    this._addFrame(this._getCurrentFrame());
    this._startNewFrame();
  };
};

Game.prototype._completeGameIfRequired = function() {
  if(this.frames.length === 10) {
    this.complete = true;
  };
};

Game.prototype._next2Rolls = function(i) {
  console.log('i:' + i);

  if(i < 9) {
    if(this.frames[i+1].hasStrike()) {
      return (this.frames[i+1].getRoll(0) + this.frames[i+2].getRoll(0));
    } else {
      return (this.frames[i+1].getRoll(0) + this.frames[i+1].getRoll(1));
    };
  } else {
    return (this.frames[i].getRoll(1) + this.frames[i].getRoll(2));
  };
};

Game.prototype._nextRoll = function(i) {
  if(i < 9) {
    return this.frames[i+1].getRoll(0);
  } else {
    return this.frames[i].getRoll(2);
  };
};
