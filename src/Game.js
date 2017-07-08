'use strict';

function Game() {
  this.scoreCard = [];
  this.totalScore = 0;
  this.MAX_FRAMES = 10;
  this.currentFrame = null;
  const scoreCard = new ScoreCard();
}

Game.prototype.play = function() {
  this.roll();
  this.checkFrame();
};

Game.prototype.checkGameEnd = function() {
  if (this.turn < this.MAX_TURNS ||
    (scorecard[scorecard.length - 1][0] === 10 || scorecard.length < 14)) {
    return;
  }
  this.endGame();
};

Game.prototype.countFrames = function() {
  return scorecard.length;
};

Game.prototype.checkFrame = function() {
  if (this.currentFrame === null) {
    this.currentFrame = new Frame;
  }
};

Game.prototype.roll = function() {
  this.currentFrame.roll();
};

Gamr.prototype.endGame = function() {
  return "Game over!";
};
