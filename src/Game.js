'use strict';

function Game (){
  this.frames = [];
  this.total = 0
  this.MAXIMUM_FRAMES = 10;
};

Game.prototype.roll = function (roll1, roll2) {
  this._maxFrames()
  var frame;
  frame = new Frame(roll1, roll2);
  this.frames.push(frame);
};

Game.prototype.getRoll = function (index) {
  return this.frames[index-1];
};

Game.prototype._maxFrames = function () {
  if (this.frames.length === this.MAXIMUM_FRAMES) throw ("Game finished")
};

Game.prototype.totalScore = function () {
  this.total = 0
  for (var i = 0; i < this.frames.length; i ++){
    if(this.frames[i]._isStrike()) {
      this.total +=this.frames[i].total(this.frames[i+1])
    }
    else if (this.frames[i]._isSpare()) {
      this.total +=this.frames[i].total(this.frames[i+1])
    }
    else {
      this.total += this.frames[i].total()
    }
  }
  return this.total;
};

Game.prototype.frameScore = function (frame) {
    if(this.frames[frame-1]._isStrike()) {
      return this.frames[frame-1].total(this.frames[frame])
    }
    else if (this.frames[frame-1]._isSpare()) {
      return this.frames[frame-1].total(this.frames[frame])
    }
    else {
      return this.frames[frame-1].total()
    }
};
