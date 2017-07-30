'use strict';
const MAX_EXTRA_TURNS = 13;
const MAX_TURNS = 10;

function Game () {
  this.scoreCard = new ScoreCard();
  this.currentFrame = new Frame(this.scoreCard);
}

Game.prototype = {
  play: function () {
    if (this.checkGameEnd()) { console.log('Game over!'); return; }
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
  },

  checkGameEnd: function () {
    var frames = this.getScoreCard().getCard();
    var lastIndex = frames.length - 1;
    return (frames.length === MAX_TURNS &&
        frames[lastIndex].length === 2 &&
        frames[lastIndex][0] !== 10) ||
      (frames.length === MAX_EXTRA_TURNS &&
        frames[lastIndex].length === 2);
  }
};

function flatten (ar) {
  if (!(ar instanceof Array)) throw new TypeError('Passed: ' + ar);
  if (ar === [[]]) { return []; }
  return ar.reduce(function (newArr, val) { return newArr.concat(val); });
}

function sumArray (ar) {
  if (!(ar instanceof Array)) {
    throw new TypeError('Passed: ' + ar);
  }
  if (ar.length === 0) {
    return 0;
  }
  return ar.reduce(function (sum, val) {
    return sum + val;
  });
}
