'use strict';

function Game()
{
  this.currentScore = 0;
  this.totalScore = []
};

Game.prototype.addCurrentFrame = function (frame) {
  this.totalScore.push(frame);
};
