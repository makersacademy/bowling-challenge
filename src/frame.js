'use strict';

function Frame() {
  this.throwId = 0;
  this.availablePins = 10;
  this.ball1 = 0;
  this.ball2 = 0;
  this.frame = [];
  this.game = [];
};

Frame.prototype.score = function (pinsDown) {
  this.throwId ++;
  if (this.throwId == 1) {
    if (pinsDown == this.availablePins) {
      this.ball1 += pinsDown
      this.end();
      this.start();
    }
    this.ball1 += pinsDown
  }
  else if (this.throwId == 2) {
    this.ball2 += pinsDown
    this.end();
    this.start();
  }
};

Frame.prototype.end = function () {
  this.frame.push(this.ball1);
  this.frame.push(this.ball2);
  this.game.push(this.frame);
}

Frame.prototype.start = function () {
  this.throwId = 0;
  this.availablePins = 10;
  this.ball1 = 0;
  this.ball2 = 0;
}
