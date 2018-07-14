"use strict";

function Game() {
  this.total = 0;
  this.frames = [];
}

Game.prototype.addFrame = function (frame) {
  this.frames.push(frame);
  this._calculateTotalScore();
};

Game.prototype._calculateTotalScore = function () {
  this.total = 0;
  for ( var index in this.frames) {
    this.total += this.frames[index].first_roll;
    this.total += this.frames[index].second_roll;
  }
};
