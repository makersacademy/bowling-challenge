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

  getTotalScore: function () {
    return sumArray(flatten(this.getScoreCard().getCard()));
  },

  getScoreCard: function () {
    return this.scoreCard;
  }
};

function flatten (ar) {
  if (!(ar instanceof Array)) throw new TypeError('Passed: ' + ar);
  if (ar === [[]]) { return []; }
  return ar.reduce(function (newArr, val) { return newArr.concat(val); });
}

function sumArray (ar) {
  if (!(ar instanceof Array)) { throw new TypeError('Passed: ' + ar); }
  if (ar.length === 0) { return 0; }
  return ar.reduce(function (sum, val) { return sum + val; });
}

// Game.prototype.checkGameEnd = function () {
//   if (this.turn < MAX_TURNS ||
//     (scorecard[scorecard.length - 1][0] === 10 || scorecard.length < 14)) {
//     return;
//   }
//   this.endGame();
// };
