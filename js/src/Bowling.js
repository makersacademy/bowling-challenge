'use strict';

function Bowling() {
  this._framerecord = [];
  this._gamerecord = [];
  this._framesores = [];
  this._totalscores = [];
  this.NUMBEROFROLL = 2;

};

Bowling.prototype.knock = function (number) {
  this._knockedPins = number;

  if (this._gamerecord.length == 10) {
      this.addThridRoll(number);
  } else {
    this.recordFrame();
  }
};

Bowling.prototype.recordFrame = function () {
  var numberofFrameRoll = this.NUMBEROFROLL;

  if (this._framerecord.length == numberofFrameRoll) {
    this._framerecord = [];
  }

  this._framerecord.push(this._knockedPins);

  if (this._framerecord[0] == 10 && this._gamerecord.length != 9) {
    this._framerecord.push(0);
  };

  if (this._framerecord[0] != 10 && this._gamerecord.length != 9) {
    if ((this._framerecord[0] + this._framerecord[1]) > 10) {
      throw new Error("Over 10 knock down in one frame")
    }
  }

  if (this._framerecord.length == numberofFrameRoll) {
    this.recordGame();
  }

};

Bowling.prototype.recordGame = function () {
  this._gamerecord.push(this._framerecord);
  this.caculateFrameScore(this._gamerecord.length);
  this.updateSpareScore(this._gamerecord.length - 1);
  this.updateStrikeScore(this._gamerecord.length - 1);
  this.calulateTotalScore(this._gamerecord.length)
};

Bowling.prototype.caculateFrameScore = function (framenumber) {
  var framescore = 0;
  for (var i = 0; i < this._gamerecord[framenumber-1].length; i++) {
    framescore = framescore + this._gamerecord[framenumber-1][i]
  };

  this._framesores[framenumber-1] = framescore;
};

Bowling.prototype.calulateTotalScore = function (framenumber) {
  var sumscore = 0
  for (var i = 0; i < framenumber; i++) {
    sumscore = sumscore + this._framesores[i]
  }

  this._totalscores[framenumber-1] = sumscore;
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

Bowling.prototype.updateSpareScore = function (framenumber) {
  if (this._gamerecord.length > 1) {
    if (this._isSpares(framenumber)) {
      this._framesores[framenumber - 1] = this._framesores[framenumber - 1] + this._gamerecord[framenumber][0];
      this.calulateTotalScore(framenumber);
    }
  }
};

Bowling.prototype.updateStrikeScore = function (framenumber) {

  if (this._gamerecord.length > 2) {
    if (this._isStrikes(framenumber - 1) && this._isStrikes(framenumber)) {
      this._framesores[framenumber - 2] = this._framesores[framenumber - 2] + this._gamerecord[framenumber - 1][0] + this._gamerecord[framenumber][0];
      this.calulateTotalScore(framenumber - 1);
      this.calulateTotalScore(framenumber);
    };
  };

  if (this._gamerecord.length > 1) {
    if (this._isStrikes(framenumber) && (!this._isStrikes(framenumber + 1) || framenumber == 9)) {
      this._framesores[framenumber - 1] = this._framesores[framenumber - 1] + this._gamerecord[framenumber][0] + this._gamerecord[framenumber][1];
      this.calulateTotalScore(framenumber);
    };
  };

};

Bowling.prototype.addThridRoll = function (knockDownNumber) {
  if (this._isSpares(10) || this._isStrikes(10)) {
  this._gamerecord[9].push(knockDownNumber);
  this.caculateFrameScore(10);
  this.calulateTotalScore(10);
  };
};