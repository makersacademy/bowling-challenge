'use strict'

function Scorecard() {
  this.score = 0;
  this.over = true;
};

Scorecard.prototype.isOver = function () {
  return this.frames === 10;
};

Scorecard.prototype.frames = function () {

};

Scorecard.prototype.ball1 = function (pins) {
  return this.score = this.score + pins
};

Scorecard.prototype.ball2 = function (pins) {
  return this.score = this.score + pins
};
