"use strict"

var Bowling = function() {
  this._scoreboard = [];
  this._frame = [null, null, null];
  this._isFirstBall = true;
};

Bowling.prototype.calculateTotalScore = function() {
  var sum = 0;
  this._scoreboard.forEach(function(value) {
    sum += value[2];
  });
  return sum;
};

Bowling.prototype.enterBallScore = function(score) {
  if (this.isFinalRound()) {
    this.calculateFinalScore(score);
  } else {
    if (this._isFirstBall) {
      this.calculateScore(score);
      this.pushScoreToFrame(score);
    } else {
      this.calculateScore(score);
      this.pushScoreToFrame(score);
    }
  }
};

Bowling.prototype.newGame = function() {
  this._scoreboard = [];
  this._frame = [null, null, null];
  this._isFirstBall = true;
  this._gameOver = false;
};

Bowling.prototype.isGameOver = function() {
  if (this.isFinalRound()) {
    if (((this._scoreboard[9][0] + this._scoreboard[9][1]) < 10) && this._scoreboard[9][1] != null || this._scoreboard[9].length === 4) {
      return true;
    } else return false;
  } else return false;
};

//////////////////////////////////////////////////////////////

Bowling.prototype.calculateScore = function(score) {
  if (this._isFirstBall) {
    this.addFirstBallScore(score);
  } else {
    this.addSecondBallScore(score);
  }
};

Bowling.prototype.calculateFinalScore = function(score) {
  if (this._scoreboard[9][1] === null) {
    this._scoreboard[9][1] = score;
    this._scoreboard[9][2] += score;
    if (this._scoreboard[8][0] === 10) {
      this._scoreboard[8][2] += score;
    }
  } else {
    this._scoreboard[9][3] = score;
    this._scoreboard[9][2] += score;
  }
};

Bowling.prototype.pushScoreToFrame = function(score) {
  if (this._isFirstBall) {
    this.pushFirstScoreToFrame(score);
  } else {
    this.pushSecondScoreToFrame(score);
  }
};

Bowling.prototype.pushFirstScoreToFrame = function(score) {
  if (score === 10) {
    this._frame[0] = score;
    this.pushFrameToScoreboard();
  } else {
    this._frame[0] = score;
    this.pushFrameToScoreboard();
    this._isFirstBall = false;

  }
};

Bowling.prototype.pushSecondScoreToFrame = function(score) {
  this._scoreboard[this._scoreboard.length - 1][1] = score;
  this._scoreboard[this._scoreboard.length - 1][2] += score;
  this._isFirstBall = true;
};

Bowling.prototype.pushFrameToScoreboard = function() {
  this._scoreboard.push(this._frame);
  this._frame = [null, null, null];
};

Bowling.prototype.addFirstBallScore = function(score) {
  if (this.isPreviousSpare() || this.isPreviousStrike()) {
    this._frame[2] = score;
    this.thisFrame()[2] += score;
  } else this._frame[2] = score;
  if (this.isPreviousPreviousStrike() && this.isPreviousStrike()) {
    this.previousPreviousFrame()[2] += score;
  }
};

Bowling.prototype.addSecondBallScore = function(score) {
  if (this.isPreviousStrike()) {
    this._frame[2] += score;
    this.thisFrame()[2] += score;
  } else this._frame[2] += score;
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

Bowling.prototype.isPreviousPreviousStrike = function() {
  if (this._scoreboard.length >= 2) {
    return this.previousPreviousFrame()[0] === 10;
  } else return false;
};

Bowling.prototype.previousFrame = function() {
  return this._scoreboard[(this._scoreboard.length - 1)];
};

Bowling.prototype.previousPreviousFrame = function() {
  return this._scoreboard[(this._scoreboard.length - 2)];
};

Bowling.prototype.thisFrame = function() {
  return this._scoreboard[(this._scoreboard.length - 1)];
};

Bowling.prototype.isFinalRound = function() {
  return this._scoreboard.length === 10;
};
