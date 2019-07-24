'use strict';

var Ball1 = function(score, game) {
  this._score = score;
};

var Bowling = function() {
  this._scoreboard = [];
  this._frame = [null, null, null];
  this._isFirstBall = true;
  this._score = 0
};

Bowling.prototype.enterBallScore = function(score) {
  if (this._isFirstBall) {
    this.calculateScore(score);
    this.pushScoreToFrame(score);
  } else {
    this.calculateScore(score);
    this.pushScoreToFrame(score);
  }
};

Bowling.prototype.pushScoreToFrame = function(score) {
  if (this._isFirstBall) {
    if (score === 10) {
      this._frame[0] = score;
      this.pushFrameToScoreboard();
    } else {
      this._frame[0] = score;
      this._isFirstBall = false
    }
  } else {
    this._frame[1] = score;
    this.pushFrameToScoreboard();
    this._isFirstBall = true;
  };
};

Bowling.prototype.pushFrameToScoreboard = function() {
  this._scoreboard.push(this._frame);
  this._frame = [null, null, null];
};

Bowling.prototype.calculateScore = function(score) {
  if (this._isFirstBall) {
    if (this.isPreviousSpare() || this.isPreviousStrike()) {
      this._frame[2] = score;
      this.thisFrame()[2] += score;
    } else this._frame[2] = score;
  } else {
    if (this.isPreviousStrike()) {
      this._frame[2] += score;
      this.thisFrame()[2] += score;
    } else this._frame[2] += score;
  };
};

Bowling.prototype.isPreviousSpare = function() {
  if (this._scoreboard.length >= 1) {
    return this.previousFrame()[2] === 10 && this.previousFrame()[0] !== 10;
  } else return false;
};

Bowling.prototype.isPreviousStrike = function() {
  if (this._scoreboard.length >= 1) {
    return this.previousFrame()[0] === 10;
  } else return false;
};

Bowling.prototype.previousFrame = function() {
  return this._scoreboard[(this._scoreboard.length - 1)];
};

Bowling.prototype.thisFrame = function() {
  return this._scoreboard[(this._scoreboard.length - 1)];
};

Bowling.prototype.isFinalRound = function() {
  return this._scoreboard.length === 10;
};

var bowling = new Bowling()
bowling.enterBallScore(5)
bowling.enterBallScore(5)
console.log(bowling._scoreboard)
bowling.enterBallScore(10)
console.log(bowling._scoreboard)
bowling.enterBallScore(5)
bowling.enterBallScore(5)
console.log(bowling._scoreboard)
bowling.enterBallScore(10)
console.log(bowling._scoreboard)
