'use strict';

function Bowling() {
  this._framerecord = [];
  this._gamerecord = [];
  this._framesores = [];
  this._totalscores = [];

};

Bowling.prototype.knock = function (number) {
  this._knockedPins = number;

  if (this._gamerecord.length == 10) {
    if (this._isSpares(10)) {
      this.addThridRoll(number);
    }
  } else {
    this.recordFrame();
  }
};

Bowling.prototype.recordFrame = function () {
  var numberofFrameRoll = 2;

  if (this._framerecord.length == numberofFrameRoll) {
    this._framerecord = [];
  }

  this._framerecord.push(this._knockedPins);
  if (this._framerecord[0] == 10) {
    this._framerecord.push(0)
  };

  if ((this._framerecord[0] + this._framerecord[1]) > 10) {
    throw new Error("Over 10 knock down in one frame")
  }

  if (this._framerecord.length == numberofFrameRoll) {
    this.recordGame();
  }

};

Bowling.prototype.recordGame = function () {
  this._gamerecord.push(this._framerecord);
  this.caculateFrameScore(this._gamerecord.length - 1);
  this.updateSpareScore(this._gamerecord.length - 1);
  this.updateStrikeScore(this._gamerecord.length - 1);
  this.calulateTotalScore(this._gamerecord.length - 1)
};

Bowling.prototype.caculateFrameScore = function (number) {
  var framescore = 0;
  for (var i = 0; i < this._gamerecord[number].length; i++) {
    framescore = framescore + this._gamerecord[number][i]
  };

  this._framesores[number] = framescore;
};

Bowling.prototype.calulateTotalScore = function (number) {
  var sumscore = 0
  for (var i = 0; i <= number; i++) {
    sumscore = sumscore + this._framesores[i]
  }

  this._totalscores[number] = sumscore;
};

Bowling.prototype.getKnockedPins = function () {
  return this._knockedPins
};

Bowling.prototype.getFrameRecord = function () {
  return this._framerecord;
};

Bowling.prototype.getGameRecord = function () {
  return this._gamerecord;
};

Bowling.prototype.getTotalScores = function (framenumber) {
  return this._totalscores[framenumber - 1];
};

Bowling.prototype._isSpares = function (framenumber) {
  return (this._gamerecord[framenumber - 1][0] + this._gamerecord[framenumber - 1][1] == 10 && this._gamerecord[framenumber - 1][0] < 10)
};

Bowling.prototype._isStrikes = function (framenumber) {
  return (this._gamerecord[framenumber - 1][0] == 10)
};

Bowling.prototype.updateSpareScore = function (number) {
  if (this._gamerecord.length > 1) {
    if (this._isSpares(number)) {
      this._framesores[number - 1] = this._framesores[number - 1] + this._gamerecord[number][0];
      this.calulateTotalScore(number - 1);
    }
  } 
};


Bowling.prototype.updateStrikeScore = function (number) {
  if (this._gamerecord.length > 1) {
    if (this._isStrikes(number)) {
      this._framesores[number - 1] = this._framesores[number - 1] + this._gamerecord[number][0]+this._gamerecord[number][1];
      this.calulateTotalScore(number - 1);
    }; 
  };
};

Bowling.prototype.addThridRoll = function (number) {
  this._gamerecord[9].push(number);
  this.caculateFrameScore(9);
  this.calulateTotalScore(9);
};

