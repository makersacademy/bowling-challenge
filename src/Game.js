'use strict'

function Game () {
  this.frames = []
};

Game.prototype.frameScore = function (score) {
  this.frames.push(score);
};
