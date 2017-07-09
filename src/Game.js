'use strict';
// const MAX_TURNS = 13;

function Game () {
  this.scoreCard = new ScoreCard();
  this.currentFrame = new Frame(this.scoreCard);
}

Game.prototype = {
  play: function () {
    this.getCurrentFrame().processRoll();
    this.nextFrame();
  },

  getCurrentFrame: function () {
    return this.currentFrame;
  },

  startNewFrame: function () {
    this.currentFrame = new Frame(this.scoreCard);
  },

  nextFrame: function () {
    if (this.isFrameFinished()) {
      this.startNewFrame();
    }
  },

  isFrameFinished: function () {
    return this.getCurrentFrame().getIsFinished();
  },

  getScoreCard: function () {
    return this.scoreCard;
  }
};

// Game.prototype.checkGameEnd = function () {
//   if (this.turn < MAX_TURNS ||
//     (scorecard[scorecard.length - 1][0] === 10 || scorecard.length < 14)) {
//     return;
//   }
//   this.endGame();
// };
