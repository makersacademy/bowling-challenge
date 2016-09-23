'use strict';

function Bowling(name) {
  this._game = [];
  this.playerName = name;
  this.score = 0;
  this.frameNumber = 1;
  this._currentFrame = [];
  this._GAME_ENDED_ERROR = "Game over. No more frame left."
}

Bowling.prototype = {
  isFirstRoll: function() {
    return this._currentFrame.length === 0;
  },
  isSecondRoll: function() {
    return this._currentFrame.length === 1
  },
  roll: function() {
    if(this.noMoreFramesToPlay()) {
      throw Error(this._GAME_ENDED_ERROR);
    } else {
      if (this.isFirstRoll()) {
        var pinsDown = Math.floor(Math.random() * 11);
        // console.log("pinsDown firstroll 1: " + pinsDown);
        this._currentFrame.push(pinsDown);
        this.score += pinsDown;
        // console.log("score first roll 1: " + this.score);
        this._game.push(pinsDown);
        this.calculateSpareBonusScore();
        // console.log("score first roll 2: " + this.score);
        if (pinsDown === 10 && this.frameNumber !== 10) {
          this._currentFrame.push(0);
          this.calculateStrikeBonusScore();
          this.frameNumber++;
          this._currentFrame = [];
        }
        else if (pinsDown === 10 && this.frameNumber === 10) {
          this.calculateStrikeBonusScore();
        }
      }
      else if (this.isSecondRoll()){
        var availablePins = 10 - this._currentFrame[0];
        if (this.frameNumber === 10 && this._currentFrame[0] === 10) {
          availablePins = 10
        }
        var pinsDown = Math.floor(Math.random() * (availablePins + 1));
        this.score += pinsDown;
        this._currentFrame.push(pinsDown);
        this._game.push(pinsDown);
        this.calculateStrikeBonusScore();
        if (this.frameNumber !== 10) {
          this._currentFrame = [];
          this.frameNumber++;
        }
        else if (this.frameNumber === 10 && ( (this._currentFrame[0] + this._currentFrame[1] !== 10) && this._currentFrame[0] !== 10 && this._currentFrame[1] !== 10) ) {
          this._currentFrame = [];
          this.frameNumber++;
        }
      }
      else if (this.frameNumber === 10 && this._currentFrame.length === 2) {
        // console.log("third roll");
        var availablePins = 10 - this._currentFrame[1];
        if (this._currentFrame[1] === 10) {
          availablePins = 10
        }
        var pinsDown = Math.floor(Math.random() * (availablePins + 1));
        this.score += pinsDown;
        this._currentFrame.push(pinsDown);
        this._game.push(pinsDown);
        this._currentFrame = [];
      }
    }
  },
  calculateStrikeBonusScore: function() {
    if (this._game.length > 2 && (this._game[this._game.length - 3] === 10)) {
      var bonusScore = this._game[this._game.length - 1] + this._game[this._game.length - 2];
      this.score += bonusScore;
    }
  },
  calculateSpareBonusScore: function() {
    if (this.frameNumber !== 1 && (this._game[this._game.length - 2] !== 10) && (this._game[this._game.length - 3] !== 10) && ((this._game[this._game.length - 2] + this._game[this._game.length - 3]) === 10)) {
      var bonusScore = this._game[this._game.length - 1];
      this.score += bonusScore;
    }
  },
  noMoreFramesToPlay: function() {
    return !!(this.frameNumber === 11);
  }

};
