'use strict';

var Game = function() {
  this.frameOne = new Frame();
  this.frameTwo = new Frame();
  this.frameThree = new Frame();
  this.frameFour = new Frame();
  this.frameFive = new Frame();
  this.frameSix = new Frame();
  this.frameSeven = new Frame();
  this.frameEight = new Frame();
  this.frameNine = new Frame();
  this.frameTen = new LastFrame();
  this._frames = [this.frameOne._scores, this.frameTwo._scores, this.frameThree._scores, this.frameFour._scores,
                  this.frameFive._scores, this.frameSix._scores, this.frameSeven._scores, this.frameEight._scores,
                  this.frameNine._scores, this.frameTen._scores];
  this._frameScores = [0,0,0,0,0,0,0,0,0,0];
  this._gameScore = 0;
};

Game.prototype.frameScores = function() {
  this._frameScores = [this.frameOne.frameScore(), this.frameTwo.frameScore(), this.frameThree.frameScore(),
                       this.frameFour.frameScore(), this.frameFive.frameScore(), this.frameSix.frameScore(),
                       this.frameSeven.frameScore(), this.frameEight.frameScore(), this.frameNine.frameScore(),
                       this.frameTen.frameScore()];
};

Game.prototype.gameScore = function() {
  this._gameScore = this._frameScores.reduce(function(a, b) { return a + b; }, 0);
};

Game.prototype.calculateBonusToEight = function() {
  for (var i=0; i<this._frames.length-2; i++) {
    if (this._frames[i][0] === 10) {
      if (this._frames[i+1][0] === 10) {
        this._frames[i][2] = this._frames[i+1][0] + this._frames[i+2][0];
      } else {
        this._frames[i][2] = this._frames[i+1][0] + this._frames[i+1][1];
      };
    } else if (this._frames[i][0] != 10 && this._frames[i][0] + this._frames[i][1] === 10) {
      this._frames[i][2] = this._frames[i+1][0];
    };
  };
};

Game.prototype.calculateBonusNine = function() {
  if (this._frames[8][0] === 10) {
    this._frames[8][2] = this._frames[9][0] + this._frames[9][1];
  } else if (this._frames[8][0] != 10 && this._frames[8][0] + this._frames[8][1] === 10) {
    this._frames[8][2] = this._frames[9][0];
  };
};
