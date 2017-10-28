'use strict';

function Game() {
  this._frame = new Frame();
  this._frames = [];
  this._pendingFrames = [];
};

Game.prototype.currentFrame = function () {
  return this._frames.length + 1;
}

Game.prototype.pinsRemaining = function () {
  return this._frame.pinsRemaining();
};

Game.prototype.bowl = function (pins) {
  if (this.isComplete() && !this.isAllowExtraBowl()) throw new Error('Game has been completed');
  this._addBonuses(pins);
  if (!this.isComplete()) {
    this._frame.bowl(pins);
    this._completeBowl();
  };
};

Game.prototype.currentBowl = function () {
  return this._frame.bowlNumber();
};

Game.prototype._completeBowl = function () {

  if (this._frame.isComplete()) {
    this._frames.push(this._frame);
    if (!this.isComplete()) this._frame = new Frame();      
  };  

};

Game.prototype.score = function () {
  return this._frames.map(this.frameScore ,this).reduce(this._sum, 0);
};

Game.prototype.frameScore = function (frame) {
  return frame.bowls().reduce(this._sum, 0);
};

Game.prototype._sum = function (a, b) {
  return a + b;
};

Game.prototype._addBonuses = function (pins) {

  this._frames.forEach(function (frame) {
    if (frame.isPendingBonus()) {
      frame.addBonus(pins);
    };
  });

};

Game.prototype.isAllowExtraBowl = function () {
  return this._frames[this._frames.length - 1].isPendingBonus();
}

Game.prototype.isComplete = function () {
  return this._frames.length >= 10;
};
