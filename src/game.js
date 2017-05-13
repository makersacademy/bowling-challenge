//'use strict';
/* globals Frame */
/* globals add */

function Game() {
  this.maxFrames = 10;
  this.frames = [];
  this.scoreCard = []; // each frame score
  this.spares = [];
  this.strikes = [];
}

Game.prototype.addFrame = function(frame) {
    this.frames.push(frame);
}

Game.prototype.run = function() {
  if(this.getFrameCount() < 9) {
    var currentframe = new Frame();
    this.addFrame(currentframe);
    currentframe.run();

    if (currentframe.isComplete()) {
      this._updateFrameScore();
      this._calculateSpare();
    }
  }
}

Game.prototype.calculateTotalScore = function() {
  return this._sumScore();
}

Game.prototype.getScoreCard = function() {
  return this.scoreCard;
}

Game.prototype.getFrameTotal = function() {
  return this._sumFrameScore();
}


Game.prototype.getFrameCount = function() {
  return this.frames.length;
}

// Private Functions

Game.prototype._sumScore = function() {
  var sum = 0;
  for (var i = 0; i < this.scoreCard.length; i++) {
    if (this.spares.indexOf(this.scoreCard[i]))
      sum += this.scoreCard[i].reduce(add, 0);
      console.log(this.scoreCard);
  }
  return sum;
}

Game.prototype._sumFrameScore = function() {
  var arr = [];
  for (var i = 0; i < this.scoreCard.length; i++) {
    arr.push(this.scoreCard[i].reduce(add, 0));
    if(this.scoreCard[i].length > 2){
      arr[i] += this.scoreCard[i + 1].reduce(add, 0)
    }
  }
  return arr;
}

Game.prototype._isATurkey = function() {
  var isTurkey = false;
  return isTurkey;
}

Game.prototype._updateFrameScore = function() {
  this.scoreCard.push(this.frames[this._frame(1)].getScores());
}

Game.prototype._frame = function(num) {
  return this.frames.length - num;
}

Game.prototype._calculateSpare = function() {
  if (this.frames[this._frame(1)].isSpare()) {
    this.spares.push(this._frame(1));
  }
  if (this.spares.length > 0) {
    this.frames[this.spares.length - 1] +=
    this.frames[this._frame(1)].getFirstScore();
    this.spares.pop();
  }
}
