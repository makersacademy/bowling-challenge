/* globals Frame */
function Game(frame) {
  'use strict';
  this._frames = [];
  this.firstFrameRoll = 0;
  this.currentRollIndex = 0;

}

Game.prototype.getFrame = function(i) {
  return this._frames[i];
}

Game.prototype.totalScore = function(){
 return this._frames.last().getScore();
};

Game.prototype.frameLength = function() {
  return this._frames.length;
};

Game.prototype.roll = function(pins) {
  this.currentRollIndex++;
  var isFirstRoll = this.currentRollIndex %2 !== 0;
  if (isFirstRoll) {
    this.firstFrameRoll = pins;
    this.checkStrike(pins);
  } else {
    this.checkExceptions(this.firstFrameRoll, pins);
    var frame = new Frame(this.firstFrameRoll, pins);
    this.addFrame(frame);
    this.cumulateFrameScore();
  }
};

Game.prototype.cumulateFrameScore = function() {
  var length = this._frames.length;
  var prevScore=0, cumulScore=0;
  if(length > 1) {
    prevScore = this._frames[length-2].getScore();
    cumulScore = this._frames.last().getScore() + prevScore;
    this._frames.last().setScore(cumulScore);
  }
}

Game.prototype.checkStrike = function(pins) {
  if (pins === 10) {
    var frame = new Frame(pins);
    this.addFrame(frame);
    this.cumulateFrameScore();
    this.currentRollIndex++;
  }
}

Game.prototype.addFrame = function(frame) {
  this._frames.push(frame);
}


Game.prototype.checkExceptions = function(roll1,roll2) {
  if (isError(roll1) || isError(roll2)) {
    var error = 'rolls are not within range or not numbers';
    throw new Error(error);
  }
  if ((roll1 + roll2) > 10) {
    throw new Error("frame can't exceed 10");
  }

  function isError(number) {
    return (typeof(number) !== "number" || number < 0 || number > 10)
  }
}

if (!Array.prototype.last){
  Array.prototype.last = function(){
    return this[this.length - 1];
  };
}