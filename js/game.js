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

  this.frames.forEach(function(frame, i, frames) {
    score += frame.getScore();

    if(frame.hasStrike()) {
      if(frames[i+1].hasStrike()) {
        score += (frames[i+1].getScore() + frames[i+2].getFirstRoll());
      } else {
        score += frames[i+1].getFirst2Rolls();
      };
    };

    if(frame.hasSpare()) {
      score += frames[i+1].getFirstRoll();
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
