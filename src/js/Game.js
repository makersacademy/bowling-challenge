'use strict';

function Game(frameConstructor = Frame) {
  this._frameConstructor = frameConstructor
  this._frame = new frameConstructor();
  this._frames = [];
};

Game.prototype = {
  
  currentFrame: function () {
    if (this.isComplete()) return this._frames.length;
    return this._frames.length + 1;
  },

  pinsRemaining: function () {
    return this._frame.pinsRemaining();
  },

  bowl: function (pins) {
    if (this.isComplete() && !this.isAllowExtraBowl()) throw new Error('Game has been completed');
    this._addBonuses(pins);
    if (!this.isComplete()) this._completeBowl(pins);
  },

  currentRound: function () {
    return this._frame.bowlRound();
  },

  score: function () {
    return this._frames.map(this.frameScore, this).reduce(this._sum, 0);
  },

  frameScore: function (frame) {
    return frame.bowls().reduce(this._sum, 0);
  },

  isAllowExtraBowl: function () {
    return this._frames[this._frames.length - 1].isPendingBonus();
  },

  isComplete: function () {
    return this._frames.length >= 10;
  },

  _completeBowl: function (pins) {
    this._frame.bowl(pins);
    if (this._frame.isComplete()) this._setNextFrame();
  },

  _setNextFrame: function () {
    this._frames.push(this._frame);
    if (!this.isComplete()) this._frame = new this._frameConstructor();
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
