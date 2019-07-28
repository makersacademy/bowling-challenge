'use strict';

function Game() {

  this._frames = []
  this.scorecard = []
  this.frameRunningTotals = []
  this.runningTotal = 0

};

Game.prototype.receiveFrame = function (frame) {
  this._frames.push(frame)
};
