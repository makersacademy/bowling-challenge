'use strict';

function Game()
{
  this.currentScore = 0;
  this.totalScore = []
  this.currentFrame = null
};

Game.prototype.addCurrentFrame = function(frame = this.currentFrame) {
  this.totalScore.push(frame);
};

Game.prototype.addScoretoFrame = function(score1, score2 = 0) {
  this.currentFrame = new Frame(score1,score2)
};
