'use strict';

function Frame (card) {
  this.frameScore = [];
  this.scoreCard = card;
  this.isFinished = false;
  this.rollCount = 0;
}

Frame.prototype = {
  processRoll: function () {
    if (this.getRollCount() < 2 && this.remainder() > 0) {
      var roll = this.roll();
      this.updateFrameScore(roll);
    } else if (this.getRollCount() < 2) {
      this.updateFrameScore(0);
    }
    this.checkFullFrame();
  },

  getRollCount: function () {
    return this.rollCount;
  },

  remainder: function () {
    if (this.getRollCount() > 0) {
      return 10 - this.getFrameScore()[0];
    }
    return 10;
  },

  updateFrameScore: function (rollScore) {
    if (this.getFrameScore().length > 1) {
      throw Error('Game has tried to play a full frame');
    }
    // else if (!(rollScore instanceof 'Integer'){
    //   throw TypeError('not passed a number');
    // }
    this.frameScore.push(rollScore);
    this.updateRollCount();
  },

  roll: function () {
    return roll(this.remainder());
  },

  updateRollCount: function () {
    this.rollCount ++;
  },

  checkFullFrame: function () {
    if (this.getRollCount() === 2) {
      this.updateIsFinished(true);
    }
  },

  getIsFinished: function () {
    return this.isFinished;
  },

  updateIsFinished: function (boolean) {
    this.isFinished = boolean;
  },

  updateScoreCard: function () {
    this.getScoreCard().updateCard(this.getFrameScore());
  },

  getFrameScore: function () {
    return this.frameScore;
  },

  getLastFrameScore: function () {
    var lastScore = this.getFrameScore()[this.getFameScore().length - 1];
    if (lastScore === 'undefined') {
      throw Error('Tried to update scorecard with no score in frame');
    }
    return lastScore;
  }
};
