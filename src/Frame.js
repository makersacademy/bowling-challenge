'use strict';

function Frame (card) {
  this.frameScore = [];
  this.scoreCard = card;
  this.isFinished = false;
  this.rollCount = 0;
}

Frame.prototype = {
  // Public interface

  // Called by Game.play()
  processRoll: function () {
    if (!this.isFullFrame() && !this.isStrike()) {
      this.updateFrameScore(this.roll());
    } else if (!this.isFullFrame() && this.isStrike()) {
      this.updateFrameScore(0);
    } else if (this.isFullFrame()) {
      throw new Error('ProcessRoll called on full frame');
    }
  },

  // Called by Game.isFrameFinished()
  getIsFinished: function () {
    return this.isFinished;
  },

  // Private methods
  isStrike: function () {
    return this.getFrameScore()[0] === 10;
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
    if (this.isFullFrame()) {
      throw Error('Game has tried to play another roll on a full frame');
    } else if (rollScore < 0 ||
        rollScore > 10 ||
        rollScore === undefined) {
      throw TypeError('not passed a valid number - score is ' + rollScore);
    }
    this.frameScore.push(rollScore);
    this.updateScoreCard();
    this.updateRollCount();
  },

  roll: function () {
    return roll(this.remainder());
  },

  updateRollCount: function () {
    this.rollCount ++;
    this.isFullFrame();
  },

  isFullFrame: function () {
    if (this.getRollCount() > 1) {
      this.updateIsFinished(true);
      return true;
    }
    return false;
  },

  updateIsFinished: function (boolean) {
    this.isFinished = boolean;
  },

  getScoreCard: function () {
    return this.scoreCard;
  },

  updateScoreCard: function () {
    this.getScoreCard().updateCard(this.getLastRoll());
  },

  getFrameScore: function () {
    return this.frameScore;
  },

  getLastRoll: function () {
    return this.getFrameScore()[this.getFrameScore().length - 1];
  }

  // getLastFrameScore: function () {
  //   var lastScore = this.getFrameScore()[this.getFameScore().length - 1];
  //   if (lastScore === 'undefined') {
  //     throw Error('Tried to update scorecard with no score in frame');
  //   }
  //   return lastScore;
  // }
};
