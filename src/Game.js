'use strict'

function Game () {
  this.MAXIMUM_PINS = 10
  this.frameNumber = 1
  this._score = 0
  this._frame = []
  this.frameLog = []
  this.frameScore = []
};


Game.prototype.getTotalScore = function () {
  var total
  total = this.frameScore.reduce((acc, val) => {
    return acc + val;
  });
  return total
}

Game.prototype.getCurrentFrame = function () {
  return this._frame
}

Game.prototype.newFrame = function () {
  this._frame = []
  return this.frameNumber += 1
};

Game.prototype.endFrame = function () {
  this.frameLog.push(this._frame)

  var total
  total = this._frame.reduce((acc, val) => {
    return acc + val;
  });
  this.frameScore.push(total)
};

Game.prototype.roll = function (pins) {
  if(pins > this.MAXIMUM_PINS) {
    throw new Error ('You can only knock 10 pins in a roll.')
  }
  if(this._frame.length === 2 && this.frameNumber < 10) {
    throw new Error('You have already rolled twice, please start a new frame.');
  } else if (this._frame.length === 3 && this.frameNumber === 10) {
    throw new Error('You can only roll three times on the last frame');
  }
  this._frame.push(pins)
  this._score += pins

};


Game.prototype.countBonus = function () {
  var getBonus = this.frameScore;
  if (this._strikeBonus() === true){
  return getBonus[getBonus.length-2] += getBonus[getBonus.length-1];
};
// else if (this._spareBonus() === true) {
//
// };
};

Game.prototype._strikeBonus = function () {
// need to check for previous frame, to get bonus
var checker = this.frameLog;
  if(checker[this.frameNumber-2][0] === 10){
    return true
  }
  return false
};

Game.prototype._spareBonus = function () {
  var checker = this.frameLog;
  if(checker[this.frameNumber-2][0] + checker[this.frameNumber-2][1] === 10) {
    return true
  }
  return false
};
