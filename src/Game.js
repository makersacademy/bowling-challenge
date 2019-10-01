'use strict'

function Game () {
  this.MAXIMUM_PINS = 10
  this.frameNumber = 1
  this._score = 0
  this._frame = []
  this.frameLog = [[0,0]]
  this.frameScore = [0]
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
if(this.frameNumber < 10) {
  this._frame = []
  return this.frameNumber += 1
} return
};

Game.prototype.endFrame = function () {
  this.frameLog.push(this._frame)
  console.log(this.frameLog);
  //   console.log("After bonus  " + this.frameLog)
  // };

  var total
  total = this._frame.reduce((acc, val) => {
    return acc + val;
  });
  this.frameScore.push(total)

};

Game.prototype.roll = function (pins) {
  if(this._frame[0] + pins > this.MAXIMUM_PINS) {
    throw new Error ('You can only knock 10 pins in a roll.')
  }
  if(this._frame.length === 2) {
    throw new Error('You have already rolled twice, please start a new frame.');
  }
  if (this._frame[0] === 10 && this.frameNumber === 10) {
    return this.frameTen();
  };
  //   else if (this._frame.length === 3 && this.frameNumber === 10) {
  //   throw new Error('You can only roll three times on the last frame');
  // }
  this._frame.push(pins)
  this._score += pins

};

Game.prototype.frameTen = function (pins) {
  if (this._frame[0] !== 10) {
    if(this._frame.length === 2) {
      throw new Error('You cannot roll three times in the last frame if no bonus.');
    }
  }
  if(this._frame[0] + this._frame[1] + pins > this.MAXIMUM_PINS) {
    throw new Error ('You can only knock 10 pins in a roll.')
  }
  this._frame.push(pins)
  this._score += pins

};

Game.prototype.countBonus = function () {
  // console.log("frame number: " + this.frameNumber)
  var frameScore = this.frameScore;
  // console.log("before Bonus  " + this.frameLog)

  if (this._strikeBonus() === true){
  frameScore[frameScore.length-2] += frameScore[frameScore.length-1];
  // console.log("Inside count Bonus  " + this.frameLog);
} else if (this._spareBonus() === true) {
  frameScore[frameScore.length-2] += this.frameLog[this.frameLog.length-1][0];
    // console.log("Inside count Bonus  " + this.frameLog);
}
};

Game.prototype._strikeBonus = function () {
// check from previous frame, to get bonus
var checker = this.frameLog;
  if(checker[this.frameNumber-1][0] === 10){
    return true
  }
  return false
};

Game.prototype._spareBonus = function () {
  var checker = this.frameLog;
  if(checker[this.frameNumber-1][0] + checker[this.frameNumber-1][1] === 10) {
    return true
  }
  return false

  // Game.prototype.newGame = function () {
  //   this.frameNumber = 1
  //   this._score = 0
  //   this._frame = []
  //   this.frameLog = [[0,0]]
  //   this.frameScore = [0]
  // }
};
