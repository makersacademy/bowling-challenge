'use strict';

var Frame = function(score, game) {
  this._frame = {
    ball1: null,
    ball2: 'X',
    score: 0,
    spare: false,
    strike: false
  };
  this._game = game
};

Frame.prototype.updateFrameScore1 = function(score) {
  if (score === 10) {
    this.pushScore1ToFrame(score)
    this._frame.strike = true;
  } else {
    this.pushScore1ToFrame(score)
    this._game.FirstBall(false)
  };
};

Frame.prototype.updateFrameScore2 = function(score) {
  if (this.isSpare(score)) {
    this.spareScore();
  } else {
    this.pushScore2ToFrame(score)
    this._game.FirstBall(true)
  };
};

Frame.prototype.spareScore = function(score) {
  this.pushScore2ToFrame(score);
  this._frame.spare = true;
  this._game.FirstBall(true);
};

Frame.prototype.pushFrameToScoreboard = function() {
  this._game.pushFrameToScoreboard(this)
};

Frame.prototype.pushScore1ToFrame = function(score) {
  this._frame.ball1 = score;
  this._frame.score = score;
};

Frame.prototype.pushScore2ToFrame = function(score) {
  this._frame.ball2 = score;
  this._frame.score += score;
};

Frame.prototype.pushScore3ToFrame = function(score) {
  this._frame.ball3 = score;
  this._frame.score += score;
};

Frame.prototype.isSpare = function(score) {
  return this._frame.ball1 + score === 10
};

Frame.prototype.updateScore = function(score) {
  this._frame.score += score
};

Frame.prototype.thisFrame = function() {
  return this._frame;
};
