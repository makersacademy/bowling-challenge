'use strict'

var Game = function() {
  this.score = 0;
  this.frame = 1;
  this.rollsThisFrame = 0;
}

Game.prototype.roll = function (pins) {
  if (pins === 10) {
    this.score = 'X';
  } else {
  this.score += pins;
  this.rollsThisFrame++;
  this.updateFrame();
};
};

Game.prototype.frame = function () {
  return this.frame;
};

Game.prototype.updateFrame = function () {
  if (this.rollsThisFrame < 2 ) {
    this.rollsThisFrame++;
  } else {
    this.frame++;
  };
};
