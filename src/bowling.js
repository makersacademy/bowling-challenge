'use strict';

function Bowling(name) {
  this.game = [];
  this.playerName = name;
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = [];
}

Bowling.prototype = {
  isFirstRoll: function() {
    return this.currentFrame.length === 0;
  },
  isSecondRoll: function() {
    return this.currentFrame.length === 1
  },
  roll: function() {
    if (this.isFirstRoll()) {
      var pinsDown = Math.floor(Math.random() * 11);
      // console.log("pinsDown firstroll 1: " + pinsDown);
      this.currentFrame.push(pinsDown);
      this.score += pinsDown;
      // console.log("score first roll 1: " + this.score);
      this.game.push(pinsDown);
      this.calculateSpareBonusScore();
      // console.log("score first roll 2: " + this.score);
      if (pinsDown === 10 && this.frameNumber !== 10) {
        this.currentFrame.push(0);
        this.calculateStrikeBonusScore();
        this.frameNumber++;
        this.currentFrame = [];
      }
      else if (pinsDown === 10 && this.frameNumber === 10) {
        this.calculateStrikeBonusScore();
      }
    }
    else if (this.isSecondRoll()){
      var availablePins = 10 - this.currentFrame[0];
      if (this.frameNumber === 10 && this.currentFrame[0] === 10) {
        availablePins = 10
      }
      var pinsDown = Math.floor(Math.random() * (availablePins + 1));
      this.score += pinsDown;
      this.currentFrame.push(pinsDown);
      this.game.push(pinsDown);
      this.calculateStrikeBonusScore();
      if (this.frameNumber !== 10) {
        this.currentFrame = [];
        this.frameNumber++;
      }
      else if (this.frameNumber === 10 && ( (this.currentFrame[0] + this.currentFrame[1] !== 10) && this.currentFrame[0] !== 10 && this.currentFrame[1] !== 10) ) {
        this.currentFrame = [];
        this.frameNumber++;
      }
    }
    else if (this.frameNumber === 10 && this.currentFrame.length === 2) {
      // console.log("third roll");
      var availablePins = 10 - this.currentFrame[1];
      if (this.currentFrame[1] === 10) {
        availablePins = 10
      }
      var pinsDown = Math.floor(Math.random() * (availablePins + 1));
      this.score += pinsDown;
      this.currentFrame.push(pinsDown);
      this.game.push(pinsDown);
      this.currentFrame = [];
    }
  },
  calculateStrikeBonusScore: function() {
    if (this.game.length > 2 && (this.game[this.game.length - 3] === 10)) {
      // console.log("score at strike bonus 1: " + this.score);
      var bonusScore = this.game[this.game.length - 1] + this.game[this.game.length - 2];
      // console.log("bonusScore at strike: " + bonusScore);
      // console.log("score at strike bonus 2: " + this.score);
      this.score += bonusScore;
      // console.log("score at strike bonus 3: " + this.score);
    }

  },
  calculateSpareBonusScore: function() {
    if (this.frameNumber !== 1 && (this.game[this.game.length - 2] !== 10) && (this.game[this.game.length - 3] !== 10) && ((this.game[this.game.length - 2] + this.game[this.game.length - 3]) === 10)) {
      var bonusScore = this.game[this.game.length - 1];
      this.score += bonusScore;
    }
  }


};
