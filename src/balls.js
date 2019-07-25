'use strict';

var Ball1 = function(score, game) {
  this._score = score;
  this._game = game;
  this._frame = new Frame(score, game);
};

Ball1.prototype.pushBallToFrame = function() {
  if (this._game.finalFrame() &&
    this._game.thisFrame().thisFrame().strike === true) {
    this.extraBallStrike();
  } else if (this._game.finalFrame() &&
    this._game.thisFrame().thisFrame().spare === true) {
    this.extraBallSpare();
  } else {
    this.regularBall();
  }
};

Ball1.prototype.extraBallStrike = function() {
  this._game.thisFrame().pushScore2ToFrame(this._score);
  this.updatePreviousScore();
  this._game.FirstBall(false);
};

Ball1.prototype.extraBallSpare = function() {
  this._game.thisFrame().pushScore3ToFrame(this._score);
};

Ball1.prototype.regularBall = function() {
  this._frame.updateFrameScore1(this._score);
  this._frame.pushFrameToScoreboard();
  this.updatePreviousScore();
  this.updatePreviousPreviousScore();
};

Ball1.prototype.updatePreviousScore = function() {
  if (this._game.gameLength() > 1) {
    if (this.needToUpdateScore()) {
      this._game.previousFrame().updateScore(this._score);
    };
  };
};

Ball1.prototype.updatePreviousPreviousScore = function() {
  if (this._game.gameLength() > 2) {
    if (this._game.previousFrame().thisFrame().strike === true &&
      this._game.previousPreviousFrame().thisFrame().strike === true) {
      this._game.previousPreviousFrame().updateScore(this._score);
    };
  };
};

Ball1.prototype.needToUpdateScore = function() {
  return this._game.previousFrame().thisFrame().spare === true ||
    this._game.previousFrame().thisFrame().strike === true
};

var Ball2 = function(score, game) {
  this._score = score;
  this._frame = game.thisFrame();
  this._game = game
};

Ball2.prototype.pushBallToFrame = function() {
  if (this._game.finalFrame()) {
    this.extraBallStrike();
  } else {
    this._frame.updateFrameScore2(this._score);
    this.updatePreviousScore(this._score);
  };
};

Ball2.prototype.extraBallStrike = function() {
  this._game.thisFrame().pushScore3ToFrame(this._score)
};

Ball2.prototype.updatePreviousScore = function(score) {
  if (this._game.gameLength() > 1) {
    if (this.needToUpdateScore()) {
      this._game.previousFrame().updateScore(score)
    }
  }
};

Ball2.prototype.needToUpdateScore = function() {
  return this._game.previousFrame().thisFrame().strike === true
};
