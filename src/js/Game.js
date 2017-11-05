'use strict';

function Game() {
  this._frame = new Frame();
  this._frames = [];
};

Game.prototype = {
  
  bowl: function (pins) {
    if (this.isGameComplete() && !this.isExtraBowlAllowed()) throw new Error('Game has been completed');
    this._addBonuses(pins);
    this._completeRound(pins);
  },

  currentFrame: function () {
    return this._frame;
  },

  playedFrames: function () {
    return this._frames;
  },

  totalScore: function () {
    return this._frames.map(function (frame) {
      return frame.score();
    }).reduce(this._sum, 0);
  },

  isExtraBowlAllowed: function () {
    return this._frames[this._frames.length - 1].isPendingBonus();
  },

  isGameComplete: function () {
    return this._frames.length >= 10;
  },

  _completeRound: function (pins) {
    this._frame.bowl(pins);
    if (this._frame.isFrameComplete()) this._startNextFrame();
  },

  _startNextFrame: function () {
    if (!this.isGameComplete()) this._frames.push(this._frame);
    this._frame = new Frame();
  },

  _addBonuses: function (pins) {
    this._frames.forEach(function (frame) {
      if (frame.isPendingBonus()) {
        frame.addBonus(pins);
      };
    });
  },
  
  _sum: function (a, b) {
    return a + b;
  }

};
