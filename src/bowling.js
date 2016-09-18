'use strict';

function Bowling(name) {
  this.game = [];
  this.gameScores = [];
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
      // console.log("pinsDown1: " + pinsDown);
      this.currentFrame.push(pinsDown);
      this.score += pinsDown;
      if (pinsDown === 10) {
        this.currentFrame.push(0);
        // console.log("currentFrame: " + this.currentFrame);
        this.game.push(this.currentFrame);
        // console.log("game: " + this.game);
        // console.log("score: " + this.score);
        this.calculateBonusScore();
        this.frameNumber++;
        this.currentFrame = [];
      };
    }
    else if (this.isSecondRoll()){
      var availablePins = 10 - this.currentFrame[0];
      var pinsDown = Math.floor(Math.random() * (availablePins + 1));
      this.score += pinsDown;
      this.currentFrame.push(pinsDown);
      this.game.push(this.currentFrame);
      // console.log("Score2: " + this.score);
      this.calculateBonusScore();
      this.currentFrame = [];
      this.frameNumber++
    }
  },
  calculateBonusScore: function() {
    // console.log("Game2: " + this.game);
    if (this.frameNumber != 1 && this.game[this.game.length - 1][0] === 10) {
      var bonusScore = this.currentFrame[0] + this.currentFrame[1];
      // console.log("bonusScore: " + bonusScore);
      this.gameScores[this.gameScores.length - 1] += bonusScore;
      this.score += bonusScore;
    }
    else if (this.frameNumber != 1 && ((this.game[this.game.length - 1][0] + this.game[this.game.length - 1][1]) === 10)) {
      var bonusScore = this.currentFrame[0];
      // console.log("bonusScore2: " + bonusScore);
      this.gameScores[this.gameScores.length - 1] += bonusScore;
      this.score += bonusScore;
    }
  }


};
